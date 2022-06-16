import { AllTypes } from "../typefiles/ActionTypes";
import {
  filmTypes,
  charactersTypes,
  planetsTypes,
  speciesTypes,
  vehiculeTypes,
} from "../typefiles/Types";
import {
  GET_FILMS,
  GET_CHARACTERS,
  GET_PLANETS,
  GET_SPECIES,
  GET_VEHICULES,
} from "../typefiles/ActionTypes";

export interface typeState {
  allFilms: Array<filmTypes>;
  allCharacters: Array<charactersTypes>;
  allPlanets: Array<planetsTypes>;
  allSpecies: Array<speciesTypes>;
  allVehicules: Array<vehiculeTypes>;
}

const initialState: typeState = {
  allFilms: [],
  allCharacters: [],
  allPlanets: [],
  allSpecies: [],
  allVehicules: [],
};

export default function RootReducer(state = initialState, action: AllTypes) {
  switch (action.type) {
    case GET_FILMS:
      return {
        ...state,
        allFilms: action.payload,
      };
    case GET_CHARACTERS:
      return {
        ...state,
        ALL_CHARACTERS: action.payload,
      };
    case GET_PLANETS:
      return {
        ...state,
        allPlanets: action.payload,
      };
    case GET_SPECIES:
      return {
        ...state,
        allSpecies: action.payload,
      };
    case GET_VEHICULES:
      return {
        ...state,
        allVehicules: action.payload,
      };
    default:
      return null;
  }
}
