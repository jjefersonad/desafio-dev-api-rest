'use strict';

const Conta = require("../models/Conta");
const Transacao = require("../models/Transacao");

class TransacoesController {

    async index(request, response) {
        try {

            const lista = await Transacao.findAll();

            return response.json(lista);

        } catch (error) {
            return response.status(500).json({ message: error });
        }
    }

    async create(request, response) {
        try {

            const data = request.body;

            const conta = await Conta.findOne({
                where: {
                    idConta: request.params.idConta
                }
            });

            if (conta.length == 0) {
                throw "Conta inválida.";
            }

            let saldo = (parseFloat(conta.saldo) +parseFloat(data.valor));

            await conta.update({ saldo: saldo});

            const item = await Transacao.create({ valor: data.valor, idConta: request.params.idConta});

            return response.status(200).json(item);

        } catch (error) {
            return response.status(500).json({ message: error });
        }

    }

    async saque(request, response) {
        try {
            const data = request.body;

            const conta = await Conta.findOne({
                where: {
                    idConta: request.params.idConta
                }
            });

            if (conta.length == 0) {
                throw "Conta inválida.";
            }

            data.valor = (parseFloat(data.valor) * -1);
            let saldo = (parseFloat(conta.saldo) + parseFloat(data.valor));

            await conta.update({ saldo: saldo });

            const item = await Transacao.create({ valor: data.valor, idConta: request.params.idConta });

            return response.status(200).json(item);

        } catch (error) {
            return response.status(500).json({ message: error });
        }

    }
};

module.exports = new TransacoesController();
