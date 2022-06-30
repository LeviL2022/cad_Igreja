import mongoose from 'mongoose'

const eventSchema = new mongoose.Schema(
    {
        id: { type:String},
        titulo: { type: String, required: true },
        data: { type: Date },
        local: { type: String }
    },
    {
        versionKey: false
    }
)

const eventos = mongoose.model("eventos", eventSchema)

export default eventos;
