import membros from '../models/Users.js'

class UserController {

    static listarMembros = (req, res) => {
        membros.find((err, membros) => {
            res.status(200).json(membros)
        })
    }

    static listarMembrosPorId = (req, res) => {
        const id = req.params.id;

        membros.findById(id, (err, membros) => {
            if (err) {
                res.status(400).send({ message: `${err.message} - id do Membro não encontrado'` })
            } else {
                res.status(200).send(membros)
            }
        })
    }

    static cadastrarMembro = (req, res) => {
        let membro = new membros(req.body);

        membro.save((err) => {
            if (err) {
                res.status(500).send({ message: `${err.message} - falha ao cadastrar Membro.` })
            } else {
                res.status(201).send(membro.toJSON())
            }
        })
    }

    static atualizarMembro = (req, res) => {
        const id = req.params.id;

        membros.findByIdAndUpdate(id, { $set: req.body }, (err) => {
            if (err) {
                res.status(500).send({ message: err.message })
            } else {
                res.status(200).send({ message: 'Membro atualizado com sucesso' })
            }
        })
    }

    static excluirMembro = (req,res)=>{
        const id = req.params.id;

        membros.findByIdAndDelete(id,(err)=>{
            if(err){
                res.status(500).send({message:err.message})
            }else{
                res.status(200).send({message: 'Membro removido com sucesso'})
            }
        })
    }

}

export default UserController;