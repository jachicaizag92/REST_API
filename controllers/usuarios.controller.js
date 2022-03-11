const { request, response } = require('express')


const usuariosGet = (req = request, res = response) => {

    const paramquery = req.query
    res.json({
        msg: 'peticion get a /api - Controlador',
        paramquery
    })
}

const usuariosPost = (req, res) => {
    const body = req.body
    res.json({
        msg: 'peticion post a /api -Controlador',
        body
    })
}

const usuariosPatch = (req, res) => {
    res.json({
        msg: 'peticion patch a /api - controlador '
    })
}

const usuariosPut = (req, res) => {
    const id = req.params.id
    res.json({
        msg: 'peticion put a /api - controlador',
        id
    })
}


const usuariosDelete = (req, res) => {
    res.json({
        msg: 'peticion delete a /api - controlador'
    })
}
module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete,
    usuariosPatch
}