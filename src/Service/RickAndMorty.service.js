import { API_RM } from "../Constants/Api.constants";

class RickAndMortyService {

    async getAllCharacters(){
        const response = await fetch(API_RM.CHARACTERS());
        //Interceptor
        return response.json();
    }

    async getAllCharactersById(id){
        const response = await fetch(API_RM.getAllCharactersById(id));
        //Interceptor
        return response.json();
    }
}

export default new RickAndMortyService();