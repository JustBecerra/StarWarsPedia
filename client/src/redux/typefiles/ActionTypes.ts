import { filmTypes, charactersTypes, planetsTypes, speciesTypes, vehiculeTypes } from './Types';

export const GET_FILMS = 'GET_FILMS'
export const GET_CHARACTERS = 'GET_CHARACTERS'
export const GET_PLANETS = 'GET_PLANETS'
export const GET_SPECIES = 'GET_SPECIES'
export const GET_VEHICULES = 'GET_VEHICULES'

export interface getFilms {
    type: typeof GET_FILMS;
    payload: Array<filmTypes>;
}

export interface getCharacters {
    type: typeof GET_CHARACTERS;
    payload: Array<charactersTypes>;
}

export interface getPlanets{
    type: typeof GET_PLANETS;
    payload: Array<planetsTypes>;
}

export interface getSpecies{
    type: typeof GET_SPECIES;
    payload: Array<speciesTypes>;
}

export interface getVehicules{
    type: typeof GET_VEHICULES;
    payload: Array<vehiculeTypes>;
}

export type AllTypes = getFilms | getCharacters | getPlanets | getSpecies | getVehicules; 