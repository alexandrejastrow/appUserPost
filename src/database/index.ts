import { createConnection } from "typeorm";

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


    conn()
} else {
    config.entities = ['dist/app/models/*.js']
    config.migrations = ['dist/database/migrations/*.js']

    conn()
}