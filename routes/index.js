import express from 'express'
import membersRoutes from './membersRoutes.js'

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send({ titulo: "Pagina da Igreja" })
    })

    app.use(
        express.json(),
        membersRoutes
    )
}

export default routes;