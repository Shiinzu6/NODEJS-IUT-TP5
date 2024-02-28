import LivreModel from "../database/livreSchemaModel.js";

export const showLivre = async (req, res) => {
    try {
        const livres = await LivreModel.find({});
        console.log("LIVRES : ", livres);
        res.send(livres);
    } catch (e) {
        console.error(e);
        res.status(500).send({ message: "Erreur lors de la récupération des livres", error: e.message });
    }
};

export const addLivre = async (req, res) => {
    const livre = new LivreModel(req.body);

    try {
        await livre.save();
        res.send({ message: "Le livre " + livre.titre + " a bien été ajouté !", livre: livre });
    } catch (e) {
        console.error(e);
        res.status(500).send({ message: e.message });
    }
};

export const removeLivre = async (req, res) => {
    const titre = req.params.titre;

    try {
        const livre = await LivreModel.findOne({ titre: titre });
        if (!livre) {
            return res.status(404).send({ message: 'Livre non trouvé' });
        }

        await LivreModel.deleteOne({ titre: titre });

        res.send({ message: 'Livre supprimé avec succès', livre: livre });
    } catch (e) {
        console.error(e);
        res.status(500).send({ message: 'Erreur lors de la suppression du livre', error: e.message });
    }
};


export const updateLivre = async (req, res) => {
    const titre = req.params.titre;
    const updateData = req.body;

    try {
        const livre = await LivreModel.findOneAndUpdate({ titre: titre }, updateData, { new: true });
        if (!livre) {
            return res.status(404).send({ message: 'Livre non trouvé' });
        }
        res.send({ message: 'Livre mis à jour avec succès', livre: livre });
    } catch (e) {
        console.error(e);
        res.status(500).send({ message: 'Erreur lors de la mise à jour du livre', error: e.message });
    }
};