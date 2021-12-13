const express = require('express')
const app = express()

//httpをexpressに設定して作成
const http = require('http').createServer(app)

//Socket.ioをつかえるようにする
const io = require('socket.io')(http)

const dotenv = require('dotenv')

dotenv.config()
const host = process.env.HOST
const port = process.env.PORT

app.use(express.urlencoded({ extended: true }))
app.use(express.static(__dirname + '/public'))

http.listen(port, host, () => {
    console.log('http://' + host + ':' + port)
})