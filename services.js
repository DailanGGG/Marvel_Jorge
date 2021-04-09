

import api from "./marvelApi"

export default {
    //Metodo para obtener los personajes
    getCharacters(offset) {
        return api.get('/characters?offset=' + offset)
    },
    //Metodo para obtener los comics
    getComics() {
        return api.get('/comics')
    }
}