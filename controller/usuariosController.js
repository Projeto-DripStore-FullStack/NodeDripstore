import * as  usuariosRepository from "../repository/usuariosRepository.js"


export const getAll = async (req,res) => {
    try{
        const usuarios = await usuariosRepository.getAll();
        res.status(200).send(usuarios)
    } catch(error){
        res.status(500).send(`O erro foi ${error}`)
    }
}

export const getOne = async (req,res) => {
    try{
        let {id} = req.params;
        const usuario = await usuariosRepository.getOne(id);
        res.status(200).send(usuario)
    } catch(error){
        res.status(500).send(`O erro foi ${error}`)
    }
}

export const store = async (req,res) => {
    try{
        let body = req.body;
        await usuariosRepository.store(body);
        res.status(200).send(`usuario cadastrado com sucesso`)
    } catch(error){
        res.status(500).send(`O erro foi ${error}`)
    }
}

export const deletar = async (req,res) => {
    try{
        let {id} = req.params;
        await usuariosRepository.deletar(id);
        res.status(200).send("usuario deletado com sucesso")
    } catch(error){
        res.status(500).send(`O erro foi ${error}`)
    }
}

export const update = async (req,res) => {
    try{
        let {id} = req.params;
        let body = req.body;
        await usuariosRepository.update(id,body);
        res.status(200).send("usuario atualizado com sucesso")
    } catch(error){
        res.status(500).send(`O erro foi ${error}`)
    }
}

export const login = async (req,res) => {
    try{
        let {email,password} = req.body;
        await usuariosRepository.login(email,password);
        res.status(200).send(`Usuario logado com sucesso`)
    } catch(error){
        res.status(500).send(`Usuario invalido: ${error}`)
    }
}