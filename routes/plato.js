const express = require('express');
const router = express.Router();
const platoController = require('../controllers/platoController');



//  api/platos
router.post('/',platoController.crearPlato);
router.get('/', platoController.obtenerPlatos);
router.put('/:id',platoController.actualizarPlato);
router.get('/:id',platoController.obtenerPlato);
router.delete('/:id',platoController.eliminarPlato);

module.exports = router;

