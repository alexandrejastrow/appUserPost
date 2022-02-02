import { createConnection } from "typeorm";
import User from "../app/models/User";
import Post from "../app/models/Post";
const config = require('../../ormconfig')


function conn() {
    createConnection(config).then((error) => {

        if (error) {

            console.log("DB connect")
        } else {
            console.log(error)
        }
    })
}
if (process.env.DEV === "true") {
    delete config.ssl
    delete config.synchronize
    delete config.extra
    config.url = process.env.DATABASE_URL_DEV

    conn()
} else {
    config.entities = [User, Post]
    config.migrations = ['dist/database/migrations/*.js']

    conn()
}