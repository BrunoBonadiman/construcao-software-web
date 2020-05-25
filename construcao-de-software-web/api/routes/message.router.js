const express = require('express');
const router = express.Router();
const jwtHelper = require('../config/jwtHelper');


const ctrlMessage = require('../controllers/message.controller');

router.get('/listarMensagens', jwtHelper.verifyJwtToken, ctrlMessage.listarMensagens);
router.post('/enviarMensagem', jwtHelper.verifyJwtToken, ctrlMessage.store);
router.patch('/atualizarMensagem/:id', ctrlMessage.atualizarMensagem);
router.delete('/deletarMensagem/:id', ctrlMessage.deletarMensagem);

module.exports = router;