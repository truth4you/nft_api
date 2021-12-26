const express = require('express')
const util = require('util')
const db = require('../db')

const app = express()

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
	db.query(`SELECT * FROM category WHERE ? AND ${likes.join(' AND ')} ORDER BY ?? ${params.orderby[1]} LIMIT ?,?`,[
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
	db.query("INSERT INTO category (name) VALUES (?)", [token.name]).then((data, err) => {
		res.json({
			success: err==null,
			message: err?err.sqlMessage:null
		})
	})
})
app.put('/:id', (req, res) => {
	const token = req.query
	db.query("UPDATE category SET ? WHERE id=?", [token, req.params.id]).then((data, err) => {
		res.json({
			success: err==null,
			message: err?err.sqlMessage:null
		})
	})
})
module.exports = app