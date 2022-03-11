const express = require('express');
const cors = require('cors');


/**
 * Clase Server para instanciar un servidor de express
 */
class Server {


    constructor() {
        this.app = express();
        this.port = process.env.PORT
        this.usuariosPath = '/api/usuarios'
            //Middlewares
        this.middlewares()
        this.routes()

    }

    middlewares() {

        // lectura formatos JSON 
        this.app.use(express.json())

        //uso carpeta publica
        this.app.use(express.static('public'))
            //cors
        this.app.use(cors())

    }

    // separar la logica de las routes
    routes() {
        this.app.use(this.usuariosPath, require('../routes/usuarios.routes'))
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('corriendo en el puerto ', this.port);
        })
    }


}

module.exports = Server