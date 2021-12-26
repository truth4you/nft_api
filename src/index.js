const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors({
    origin: '*'
}))
app.use(express.static(__dirname + '/public'))

const models = [
    'collection', 'token', 'category', 'user', 'favorite', 'activity', 'offer', 'bid', 'auction'
]
for(const model of models) {
    const subapp = require(`./model/${model}`)
    app.use(`/api/${model}`, subapp)
}
 
app.listen(3000)