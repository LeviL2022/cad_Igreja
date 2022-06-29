import mongoose from 'mongoose'

const memberSchema = new mongoose.Schema(
    {
        id: { type: String },
        nome: { type: String, required: true },
        cpf: { type: Number },
        email: { type: String },
        senha: { type: String }
    },
    {
        versionKey: false
    }

)

const membros = mongoose.model("membros", memberSchema)

export default membros;

    // logInUser(email, senha) {
    //    if (email === this.email && senha === this.senha) {
    //        return 'Login feito com sucesso'
    //    } else { throw new Error('Usuario não conseguiu logar') }
    //}

