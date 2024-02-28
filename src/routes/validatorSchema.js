export const voirLivreSchema = {
    response: {
        200: {
            type: 'array', // Changé de 'object' à 'array'
            items: { // Définition de chaque élément du tableau
                type: 'object',
                properties: {
                    titre: { type: 'string' },
                    auteur: { type: 'string' },
                    description: { type: 'string' },
                    format: {
                        type: 'string',
                        enum: ['poche', 'manga', 'audio']
                    }
                }
            }
        }
    }
};


export const addLivreSchema = {
    body: {
        type: 'object',
        required: ['titre', 'auteur'],
        additionalProperties: false,
        properties: {
            titre: { type: 'string' },
            auteur: { type: 'string' },
            description: { type: 'string' },
            format: {
                type: 'string',
                enum: ['poche', 'manga', 'audio']
            }
        }
    },
    response: {
        200: {
            type: 'object',
            properties: {
                message: { type: 'string' },
                livre: {
                    type: 'object',
                    properties: {
                        titre: { type: 'string' },
                        auteur: { type: 'string' },
                        description: { type: 'string' },
                        format: {
                            type: 'string',
                            enum: ['poche', 'manga', 'audio', 'numérique']
                        }
                    }
                }
            }
        }
    }
};


export const deleteLivreSchema = {
    params: {
        type: 'object',
        properties: {
            titre: { type: 'string', description: 'Le titre du livre à supprimer' }
        },
        required: ['titre']
    },
    response: {
        200: {
            type: 'object',
            properties: {
                message: { type: 'string' },
                livre: {
                    type: 'object',
                    properties: {
                        titre: { type: 'string' },
                        auteur: { type: 'string' },
                        description: { type: 'string' },
                        format: {
                            type: 'string',
                            enum: ['poche', 'manga', 'audio', 'numérique']
                        }
                    }
                }
            }
        }
    }
}


export const updateLivreSchema = {
    params: {
        type: 'object',
        properties: {
            titre: { type: 'string', description: 'Le titre du livre à modifier' }
        },
        required: ['titre']
    },
    body: {
        type: 'object',
        properties: {
            titre: { type: 'string', description: 'Nouveau titre du livre' },
            auteur: { type: 'string', description: 'Nom de l\'auteur du livre' },
            description: { type: 'string', description: 'Description du livre' },
            format: {
                type: 'string',
                description: 'Format du livre',
                enum: ['poche', 'manga', 'audio', 'numérique']
            }
        },
        required: [],
        additionalProperties: false
    },
    response: {
        200: {
            type: 'object',
            properties: {
                message: { type: 'string' },
                livre: {
                    type: 'object',
                    properties: {
                        titre: { type: 'string' },
                        auteur: { type: 'string' },
                        description: { type: 'string' },
                        format: {
                            type: 'string',
                            enum: ['poche', 'manga', 'audio', 'numérique']
                        }
                    }
                }
            }
        }
    }
};