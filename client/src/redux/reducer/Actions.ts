import { GET_CHARACTERS, GET_PLANETS, GET_SPECIES, GET_VEHICULES, GET_FILMS } from "../typefiles/ActionTypes";

export function getFilms(data:any){
    return {
        type: GET_FILMS,
        payload:data
    }
}

export function getCharacters(data:any){
    return {
        type: GET_CHARACTERS,
        payload: data
    }
}

export function getPlanets(data:any){
    return {
        type: GET_PLANETS,
        payload: data
    }
}

export function getSpecies(data:any){
    return {
        type: GET_SPECIES,
        payload:data
    }
}

export function getVehicules(data:any){
    return {
        type: GET_VEHICULES,
        payload:data
    }
}