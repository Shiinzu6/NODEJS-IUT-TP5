import {addLivre, removeLivre, showLivre, updateLivre} from "../controller/livreController.js";
import { voirLivreSchema, addLivreSchema, deleteLivreSchema, updateLivreSchema } from "./validatorSchema.js";

export default async (app, opts) => {
    app.get('/livre', {schema: voirLivreSchema}, showLivre)
    app.post('/livre', { schema: addLivreSchema }, addLivre)
    app.delete('/livre/:titre', {schema: deleteLivreSchema}, removeLivre)
    app.put('/livre/:titre', {schema: updateLivreSchema}, updateLivre)
}