import fastify from "fastify";
import fastifyFormbody from "@fastify/formbody"
import basicAuth from "@fastify/basic-auth";
import fs from "fs";
import path from "path";
import { fileURLToPath } from 'url';
import { dirname } from 'node:path';

// TODO : Ajouter le protocole HTTPS et donc clé privée + request public signé

const __dirname = dirname(fileURLToPath(import.meta.url));
const authenticate = {realm: 'Westeros'}

export const build = (opts = {}) => {

    console.log(path.join(__dirname, './https/server.key'))
    const httpsOptions = {
        key: fs.readFileSync(path.join(__dirname, './https/server.key')),
        cert: fs.readFileSync(path.join(__dirname, './https/cert.crt'))
    };

    async function validate(username, password, req, reply) {
        if (username !== 'username' || password !== 'password123!') {
            throw new Error('Accès refusé');
        }
    }

    const app = fastify({
        ...opts,
        https: httpsOptions
    });

    app.register(fastifyFormbody)
    app.register(import("./routes/routes.js"));
    app.register(basicAuth, { validate, authenticate });

    return app;
}
