import membros from '../models/Users.js'

class UserController {

    static listarMembros = (req, res) => {
        membros.find((err, membros) => {
            res.status(200).json(membros)
        })
    }

}

export default UserController;