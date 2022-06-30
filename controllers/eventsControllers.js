import eventos from '../models/Events.js'

class EventsController {

    static listarEventos = (req, res) => {
        eventos.find((err, eventos) => {
            res.status(200).json(eventos)
        })
    }

    static listarEventosPorId = (req, res) => {
        const id = req.params.id;

        eventos.findById(id, (err, eventos) => {
            if (err) {
                res.status(400).send({ message: `${err.message}- id do evento não encontrado.` })
            } else {
                res.status(200).send(eventos);
            }
        })
    }

    static cadastrarEvento = (req, res) => {
        const evento = new eventos(req.body);

        evento.save((err) => {
            if (err) {
                res.status(500).send({ message: `${err.message} - falha ao cadastrar Evento` })
            } else {
                res.status(201).send(evento.toJSON())
            }
        })
    }

    static atualizarEvento = (req, res) => {
        const id = req.params.id;

        eventos.findByIdAndUpdate(id, { $set: req.body }, (err) => {
            if (err) {
                res.status(500).send({ message: `${err.message} - não foi possivel atualizar o Evento` })
            } else {
                res.status(200).send({ message: 'Evento atualizado com Sucesso' })
            }
        })
    }

    static excluirEvento = (req, res)=>{
        const id = req.params.id;

        eventos.findByIdAndDelete(id, (err)=>{
            if(err){
                res.status(500).send({message:err.message})
            }else{
                res.status(200).send({message: 'Evento excluido com sucesso.'})
            }
        })
    }
}

export default EventsController;