const { response, request } = require('express')

const Mostrartodos = (req = request, res = response) => {

    const { filtro, page = 1, limite = 12 } = req.query

    res.json({
        msg: 'get API del controlador',
        id: 210,
        filtro,
        page,
        limite
    })
}

const Modificar = (req = request, res = response) => {

    const { usuarioId } = req.params

    res.json({
        msg: 'put agregar API',
        id: 210,
        usuarioId
    })


}

const Agregar = (req, res = response) => {

    const { nombre, edad } = req.body

    res.json({
        msg: 'post Modificar API',
        id: 210,
        nombre,
        edad
    })

}
const Eliminar = (req, res = response) => {
    res.json({
        msg: 'delete API',
        id: 210
    })
}

const ModificarDato = (req, res = response) => {
    res.json({
        msg: 'patch API',
        id: 210
    })
}

module.exports = { Mostrartodos, Agregar, Modificar, Eliminar, ModificarDato }