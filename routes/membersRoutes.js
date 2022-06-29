import express from 'express'
import UsersControllers from '../controllers/usersControllers.js'

const router = express.Router();


router
    .get("/membros", UsersControllers.listarMembros)

    export default router;