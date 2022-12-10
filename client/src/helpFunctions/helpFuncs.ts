import {
  ALL_FILMS,
  ALL_CHARACTERS,
  ALL_SPECIES,
  ALL_VEHICULES,
  ALL_PLANETS,
} from "./GQLs";

export function sortCategory(categoryID: string) {
  switch (categoryID) {
    case "ALL_FILMS":
      return ALL_FILMS;
    case "ALL_CHARACTERS":
      return ALL_CHARACTERS;
    case "ALL_SPECIES":
      return ALL_SPECIES;
    case "ALL_VEHICULES":
      return ALL_VEHICULES;
    case "ALL_PLANETS":
      return ALL_PLANETS;
    default:
      return ALL_FILMS;
  }
}

export function sortData(data: any) {
  if (data.allFilms?.films) {
    return data.allFilms.films;
  } else if (data.allPeople?.people) {
    return data.allPeople.people;
  } else if (data.allPlanets?.planets) {
    return data.allPlanets.planets;
  } else if (data.allSpecies?.species) {
    return data.allSpecies.species;
  } else if (data.allVehicles?.vehicles) {
    return data.allVehicles.vehicles;
  }
}
