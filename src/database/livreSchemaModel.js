import mongoose from "mongoose";

const livreSchema = new mongoose.Schema({
    titre:
        {
            type: String,
            required: true,
        },
    auteur:
        {
            type: String,
            required: true,
        },
    description: String,
    format: {
        type: String,
        enum : ['poche', 'manga', 'audio'],
        default: 'poche',
    }
});
const LivreModel = mongoose.model("livres", livreSchema)
export default LivreModel;