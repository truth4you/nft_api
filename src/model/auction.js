const express = require('express')
const util = require('util')
const db = require('../db')

const app = express()

app.get('/all', (req, res) => {
	const params = util._extend({ skip: 0, limit: 15, orderby: ['id', 'ASC'], filter: null }, req.query)
	const paramsFilter = JSON.parse(params.filter)
	if(!paramsFilter) paramsFilter = 1
	db.query(`SELECT * FROM auction WHERE ? ORDER BY ?? ${params.orderby[1]} LIMIT ?,?`,[
		paramsFilter, params.orderby[0], parseInt(params.skip), parseInt(params.limit)
	]).then((data, err) => {
		res.json({
			count: data.length,
			data
		})
	})	
})
app.post('/', (req, res) => {
	const auction = req.query
	db.query("INSERT INTO auction SET ?", [auction]).then((data, err) => {
		res.json({
			success: err==null,
			message: err?err.sqlMessage:null
		})
	})
})
app.put('/:id', (req, res) => {
	const auction = req.query
	db.query("UPDATE auction SET ? WHERE id=?", [auction, req.params.id]).then((data, err) => {
		res.json({
			success: err==null,
			message: err?err.sqlMessage:null
		})
	})
})
app.delete('/:id', (req, res) => {
	const auction = req.query
	db.query("DELETE FROM auction WHERE id=?", [auction, req.params.id]).then((data, err) => {
		res.json({
			success: err==null,
			message: err?err.sqlMessage:null
		})
	})
})
module.exports = app