import express from 'express'
import EventsController from '../controllers/eventsControllers.js';

const router = express.Router();

router
    .get('/eventos', EventsController.listarEventos)
    .get('/eventos/:id', EventsController.listarEventosPorId)
    .post('/eventos', EventsController.cadastrarEvento)
    .put('/eventos/:id',EventsController.atualizarEvento)
    .delete('/eventos/:id',EventsController.excluirEvento)

export default router;