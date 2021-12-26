const express = require('express')
const bodyParser = require('body-parser')
const axios = require('axios')
// const ipfs = require('ipfs-http-client')
const util = require('util')
const db = require('../db')
const { web3Rinkeby } = require('../web3')
const abiERC721 = require('../abi/ERC721.json')

const app = express()
app.use(bodyParser.json());

app.get('/all', (req, res) => {
	const params = util._extend({ skip: 0, limit: 15, orderby: ['id', 'ASC'], filter: null }, req.query)
	let filter = {}, likes = [1], cnt = 0
	const paramsFilter = JSON.parse(params.filter)
	if(paramsFilter) for(let k in paramsFilter) {
		if(k=='name')
			likes.push(`\`${k}\` LIKE '%${paramsFilter[k]}%'`)
		else {
			filter[k] = paramsFilter[k]
			cnt++
		}
	}
	if(cnt==0) filter = 1
	db.query(`SELECT * FROM collection WHERE ? AND ${likes.join(' AND ')} ORDER BY ?? ${params.orderby[1]} LIMIT ?,?`,[
		filter, params.orderby[0], parseInt(params.skip), parseInt(params.limit)
	]).then((data, err) => {
		res.json({
			count: data.length,
			data
		})
	})	
})
app.post('/add/:network/:address', async (req, res) => {
	const address = req.params.address
	const network = req.params.network
	try {
		let [ data ] = await db.query("SELECT COUNT(id) cnt FROM collection WHERE network=? AND address=?", [network, address])
		if(data && data.cnt)
			throw "Collection already exists."
		const collection = util._extend({
			network,
			address,
			created_at: new Date()
		},req.body)
		const contract = new web3Rinkeby.eth.Contract(abiERC721,address)
		await contract.methods.owner().call().then((ret) => {
			collection.created_by = ret
		})
		contract.methods.totalSupply().call().then(async (count) => {
			collection.count_items = count
			data = await db.query("INSERT INTO collection SET ?",collection)
			collection.id = data.insertId
			let promiseArray = []
			for(let i = 0;i<count;i++) {
				const tokenIndex = i
				promiseArray.push(new Promise((resolve, reject) => {
					contract.methods.tokenByIndex(tokenIndex).call().then(tokenId => {
						contract.methods.tokenURI(tokenId).call().then(url => {
							// if(url.startsWith('ipfs://'))
							// 	url = `https://gateway.pinata.cloud/ipfs/${url.substr(7)}`
							contract.methods.ownerOf(tokenId).call().then(async (owner) => {
								resolve({
									token_id: tokenId, owner, url, count
								})
								// await axios.get(url).then(response=>{
								// 	const data = response.data
								// 	data.token_id = tokenId
								// 	data.owner = owner
								// 	resolve(data)
								// }).catch(error=>reject(error))
							})
						})
						
					})
				}))
			}
			const insertToken = (token, info) => {
				const row = [
					token.token_id, 
					collection.category_id, 
					collection.id, 
					info.name, 
					info.description, 
					info.external_url, 
					info.image,
					token.owner,
					new Date
				]
				db.query("INSERT INTO token (token_id,category_id,collection_id,name,description,external_link,image,created_by,created_at) VALUES ?", [[row]])
			}
			Promise.all(promiseArray).then(async values => {
				for(const value of values) {
					if(url.startsWith('ipfs://')) //{
						url = `https://gateway.pinata.cloud/ipfs/${url.substr(7)}`
						// const result = await client.get(url)
						// console.log(result)
					// } else {								
					await axios.get(value.url).then(response=>{
						const info = response.data
						insertToken(value, info)
					}).catch(err=>console.log(err))					
					// }
				}
				res.json({
					success: true,
				})
			}).catch(err => {
				res.json({
					success: false,
					error: err
				})
			})		
		}).catch((err) => {
			res.json({
				success: false,
				error: err
			})
		})
	} catch(ex) {
		console.log(ex)
		res.json({
			success: false,
			error: typeof ex == "object" ? ex.sqlMessage : ex
		})
	}
})
app.put('/:id', (req, res) => {
	const token = req.query
	db.query("UPDATE collection SET ? WHERE id=?", [token, req.params.id]).then((data, err) => {
		res.json({
			success: err==null,
			message: err?err.sqlMessage:null
		})
	})
})
module.exports = app