const { Router } = require('express')
const router = Router()

const { Mostrartodos, Agregar, Modificar, Eliminar, ModificarDato } = require('../controllers/usuario')

router.get('/', Mostrartodos)
router.put('/:usuarioId', Modificar)
router.post('/', Agregar)
router.delete('/:usuarioId', Eliminar)
router.patch('/:usuarioId', ModificarDato)

module.exports = router