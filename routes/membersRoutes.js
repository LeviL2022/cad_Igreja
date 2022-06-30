import express from 'express'
import UsersControllers from '../controllers/membersControllers.js'

const router = express.Router();


router
    .get("/membros", UsersControllers.listarMembros)
    .get("/membros/:id", UsersControllers.listarMembrosPorId)
    .post("/membros", UsersControllers.cadastrarMembro)
    .put("/membros/:id", UsersControllers.atualizarMembro)
    .delete("/membros/:id", UsersControllers.excluirMembro)

export default router;