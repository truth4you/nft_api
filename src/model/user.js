const express = require('express')
const util = require('util')
const db = require('../db')

const app = express()

app.get('/all', (req, res) => {
	const params = util._extend({ skip: 0, limit: 15, orderby: ['address', 'ASC'], filter: {} }, req.query)
	let filter = {}, likes = [1], cnt = 0
	const paramsFilter = JSON.parse(params.filter)
	if(paramsFilter) for(let k in paramsFilter) {
		if(k=='name')
			likes.push(`CONCAT_WS(' ',\`first_name\`,\`last_name\`) LIKE '%${paramsFilter[k]}%'`)
		else if(k=='first_name' || k=='last_name')
			likes.push(`\`${k}\` LIKE '%${paramsFilter[k]}%'`)
		else {
			filter[k] = paramsFilter[k]
			cnt++
		}
	}
	if(cnt==0) filter = 1
	db.query(`SELECT * FROM user WHERE ? AND ${likes.join(' AND ')} ORDER BY ?? ${params.orderby[1]} LIMIT ?,?`,[
		filter, params.orderby[0], parseInt(params.skip), parseInt(params.limit)
	]).then((data, err) => {
		res.json({
			count: data.length,
			data
		})
	})	
})
app.post('/', (req, res) => {
	const token = req.query
	db.query("INSERT INTO user (first_name,last_name,address) VALUES (?)", [token.first_name,token.last_name,token.address]).then((data, err) => {
		res.json({
			success: err==null,
			message: err?err.sqlMessage:null
		})
	})
})
app.put('/:address', (req, res) => {
	const token = req.query
	db.query("UPDATE user SET ? WHERE address=?", [token, req.params.address]).then((data, err) => {
		res.json({
			success: err==null,
			message: err?err.sqlMessage:null
		})
	})
})
module.exports = app