const express = require('express')
const util = require('util')
const db = require('../db')

const app = express()

app.get('/all', (req, res) => {
	const params = util._extend({ skip: 0, limit: 15, orderby: ['id', 'ASC'], filter: null }, req.query)
	const paramsFilter = JSON.parse(params.filter)
	if(!paramsFilter) paramsFilter = 1
	db.query(`SELECT * FROM activity WHERE ? ORDER BY ?? ${params.orderby[1]} LIMIT ?,?`,[
		paramsFilter, params.orderby[0], parseInt(params.skip), parseInt(params.limit)
	]).then((data, err) => {
		res.json({
			count: data.length,
			data
		})
	})	
})
module.exports = app