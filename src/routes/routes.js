const express = require("express");
const router = express.Router();
const PessoasController = require("../controllers/PessoasController");
const ContasController = require("../controllers/ContasController");
const TransacoesController = require("../controllers/TransacoesController");

//Rotas de pessoas
router.get('/pessoas', PessoasController.index);
router.post('/pessoas', PessoasController.create);
router.put('/pessoas/:id', PessoasController.update);
router.delete('/pessoas/:id', PessoasController.delete);

//Rotas de contas
router.get('/contas', ContasController.index);
router.post('/contas', ContasController.create);
router.get('/contas/:id/saldo', ContasController.saldo);
router.get('/contas/:id/bloqueio', ContasController.bloqueio);
router.put('/contas/:id', ContasController.update);
router.delete('/contas/:id', ContasController.delete);

//Rotas de transações
router.get('/extrato/:idConta', TransacoesController.index);
router.post('/deposito/:idConta', TransacoesController.create);
router.post('/saque/:idConta', TransacoesController.saque);

module.exports = router;
