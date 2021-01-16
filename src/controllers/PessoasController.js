'use strict';

const Pessoa = require("../models/Pessoa");

class PessoasController {

    //Lista de Pessoas
    async index(request, response) {
        try {
            const lista = await Pessoa.findAll();

            return response.json(lista);

        } catch (error) {
            return response.status(500).json({ message: error });
        }
    }

    //Cadastro de Pessoas
    async create(request, response){
        try {

            const data = request.body;
            
            const consulta = await Pessoa.findAll({
                where: {
                    cpf: data.cpf
                }
            });

            if (consulta.length > 0){
                throw "CPF já cadastrado";
            }

            const item = await Pessoa.create(request.body);

            return response.status(200).json(item);

        } catch (error) {
            return response.status(500).json({ message: error });
        }

    }

    //Atualização de Pessoas
    async update(request, response) {
        try {
            const data = request.body;

            const consulta = await Pessoa.findOne({
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
            return response.status(500).json({message: error});
        }
        
    }
    
    //Exclusão de Pessoas
    async delete(request, response) {

        try {

            const consulta = await Pessoa.findOne({
                where: {
                    idPessoa: request.params.id
                }
            });

            if (consulta.length == 0) {
                throw "Registro inválido";
            }

            await consulta.destroy();

            return response.status(200).json({message: "Registro removido com sucesso."});

        } catch (error) {
            return response.status(500).json({ message: error });
        }
    }
};

module.exports = new PessoasController();