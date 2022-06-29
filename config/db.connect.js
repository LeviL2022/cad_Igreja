import mongoose from 'mongoose'

mongoose.connect("mongodb+srv://igreja-users22:igreja123@membros1.ohgos.mongodb.net/?retryWrites=true&w=majority")

let db = mongoose.connection;

export default db;