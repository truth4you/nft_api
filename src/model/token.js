const app = require('express')()
const util = require('util')
const db = require('../db')

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
	db.query(`SELECT * FROM token WHERE ? AND ${likes.join(' AND ')} ORDER BY ?? ${params.orderby[1]} LIMIT ?,?`,[
		filter, params.orderby[0], parseInt(params.skip), parseInt(params.limit)
	]).then((data, err) => {
		res.json({
			count: data.length,
			data
		})
	})	
})
app.get('/all/category/:id', (req, res) => {
	const category_id = req.params.id
	db.query("SELECT * FROM token WHERE ?", {category_id}).then((data, err) => {
		if(err)
			res.json({
				success: false,
				message: err.sqlMessage
			})
		else
			res.json({
				success: true,
				count: data.length,
				data
			})
	})	
})
app.get('/all/collection/:id', (req, res) => {
	const collection_id = req.params.id
	db.query("SELECT * FROM token WHERE ?", {collection_id}).then((data, err) => {
		if(err)
			res.json({
				success: false,
				message: err.sqlMessage
			})
		else
			res.json({
				success: true,
				count: data.length,
				data
			})
	})	
})
app.get('/all/owner/:id', (req, res) => {
	const owner_id = req.params.id
	db.query("SELECT * FROM token WHERE ?", {owner_id}).then((data, err) => {
		if(err)
			res.json({
				success: false,
				message: err.sqlMessage
			})
		else
			res.json({
				success: true,
				count: data.length,
				data
			})
	})	
})
app.get('/:id', (req, res) => {
	const id = req.params.id
	db.query("SELECT * FROM token WHERE ?", {id}).then((data, err) => {
		if(err)
			res.json({
				success: false,
				message: err.sqlMessage
			})
		else
			res.json({
				success: true,
				data: data[0]
			})
	})	
})
app.get('/:collection/:token', (req, res) => {
	const collection_id = req.params.collection
	const token_id = req.params.token
	db.query("SELECT * FROM token WHERE collection_id=? AND token_id=?", [collection_id, token_id]).then((data, err) => {
		if(err)
			res.json({
				success: false,
				message: err.sqlMessage
			})
		else
			res.json({
				success: true,
				data: data[0]
			})
	})	
})
app.post('/', (req, res) => {
	const token = req.query
	db.query("INSERT INTO token (token_id, collection_id) VALUES (?,?)", [token.token_id, token.collection_id]).then((data, err) => {
		res.json({
			success: err==null,
			message: err?err.sqlMessage:null
		})
	})
})
app.put('/:id', (req, res) => {
	const token = req.query
	db.query("UPDATE token SET ? WHERE id=?", [token, req.params.id]).then((data, err) => {
		res.json({
			success: err==null,
			message: err?err.sqlMessage:null
		})
	})
})


module.exports = app