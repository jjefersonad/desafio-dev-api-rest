'use strict';

const Conta = require("../models/Conta");

class ContasController {

    //Lista de contas
    async index(request, response) {
        try {

            const lista = await Conta.findAll();

            return response.json(lista);

        } catch (error) {
            return response.status(500).json({ message: error });
        }
    }

    //Cadastro de contas
    async create(request, response) {
        try {

            const data = request.body;

            const consulta = await Conta.findAll({
                where: {
                    idPessoa: data.idPessoa
                }
            });

            if (consulta.length > 0) {
                throw "Esta pessoa já possui conta cadastrada.";
            }

            const item = await Conta.create(data);

            return response.status(200).json(item);

        } catch (error) {
            return response.status(500).json({ message: error });
        }

    }

    //Atualização de contas
    async update(request, response) {
        try {
            const data = request.body;

            const consulta = await Conta.findOne({
                where: {
                    idPessoa: request.params.id
                }
            });

            if (consulta.length == 0) {
                throw "Registro inválido";
            }

            const item = await consulta.update(data);

            return response.status(200).json(item);

        } catch (error) {
            return response.status(500).json({ message: error });
        }

    }

    //Exclusão de contas
    async delete(request, response) {

        try {

            const consulta = await Conta.findOne({
                where: {
                    idPessoa: request.params.id
                }
            });

            if (consulta.length == 0) {
                throw "Registro inválido";
            }

            await consulta.destroy();

            return response.status(200).json({ message: "Registro removido com sucesso." });

        } catch (error) {
            return response.status(500).json({ message: error });
        }
    }

    //Saldo de contas
    async saldo(request, response) {

        try {

            const consulta = await Conta.findOne({
                where: {
                    idConta: request.params.id
                }
            });

            if (consulta.length == 0) {
                throw "Registro inválido";
            }

            return response.status(200).json({ saldo: consulta.saldo });

        } catch (error) {
            return response.status(500).json({ message: error });
        }
    }

    //Bloqueio de contas
    async bloqueio(request, response) {

        try {

            const consulta = await Conta.findOne({
                where: {
                    idConta: request.params.id
                }
            });

            if (consulta.length == 0) {
                throw "Registro inválido";
            }

            await consulta.update({ flagAtivo: false });
            return response.status(200).json({ message: "Conta bloqueada com sucesso." });

        } catch (error) {
            return response.status(500).json({ message: error });
        }
    }
};

module.exports = new ContasController();