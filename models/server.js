const express = require('express')
const cors = require('cors')
const { use } = require('../routes/usuario')

class Server {

    constructor() {
        this.app = express()
        this.port = process.env.PORT
        this.usuarioRout = '/api/usuarios'

        this.middlewares()

        this.routes()
    }
    routes() {
        this.app.use(this.usuarioRout, require('../routes/usuario'))
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`Example app listening at http://localhost:${ this.port }`)
        })
    }
    middlewares() {
        this.app.use(cors())

        this.app.use(express.json())

        this.app.use(express.static('public'))

    }




}



module.exports = Server