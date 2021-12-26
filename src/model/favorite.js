const express = require('express')
const util = require('util')
const db = require('../db')

const app = express()

app.get('/all', (req, res) => {
	const params = util._extend({ skip: 0, limit: 15, orderby: ['id', 'ASC'], filter: null }, req.query)
	const paramsFilter = JSON.parse(params.filter)
	if(!paramsFilter) paramsFilter = 1
	db.query(`SELECT * FROM favorite WHERE ? ORDER BY ?? ${params.orderby[1]} LIMIT ?,?`,[
		paramsFilter, params.orderby[0], parseInt(params.skip), parseInt(params.limit)
	]).then((data, err) => {
		res.json({
			count: data.length,
			data
		})
	})	
})
app.post('/', (req, res) => {
	const fav = req.query
	db.query("INSERT INTO favorite (wallet_address,token_id,collection_id) VALUES (?)", [fav.wallet_address,fav.token_id,fav.collection_id]).then((data, err) => {
		res.json({
			success: err==null,
			message: err?err.sqlMessage:null
		})
	})
})
app.put('/:id', (req, res) => {
	const fav = req.query
	db.query("UPDATE favorite SET ? WHERE id=?", [fav, req.params.id]).then((data, err) => {
		res.json({
			success: err==null,
			message: err?err.sqlMessage:null
		})
	})
})
app.delete('/:id', (req, res) => {
	const fav = req.query
	db.query("DELETE FROM favorite WHERE id=?", [fav, req.params.id]).then((data, err) => {
		res.json({
			success: err==null,
			message: err?err.sqlMessage:null
		})
	})
})
module.exports = app