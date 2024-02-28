import {connectDB} from './database/database.js'
import {build} from "./app.js"

const app = build({logger: true})

const start = async () => {
    try {
        await app.listen({port: 3000}).then(() => {
            console.log("Ecoute du port 3000")
        })
        connectDB()
    } catch (err) {
        console.log("error")
        app.log.error(err)
        process.exit(1)
    }
}

start()