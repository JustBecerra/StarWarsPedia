export interface filmTypes {
  id: string;
  title: string;
  episodeID: number;
  releaseDate: string;
  director: string;
  openingCrawl: string;
}

export interface characterTypes {
  id: string;
  birthYear: string;
  homeworld: {
    name: string;
  };
  name: string;
  species: {
    name: string;
  };
  height: string;
  gender: string;
}

export interface planetTypes {
  id: string;
  name: string;
  filmConnection: {
    films: {
      title: string;
    };
  };
  population: string;
  terrains: string;
  residentConnection: {
    residents: {
      species: {
        name: string;
      };
    };
  };
}

export interface speciesTypes {
  id: string;
  averageHeight: string;
  averageLifespan: number;
  classification: string;
  designation: string;
  homeworld: {
    name: string;
  };
  name: string;
  language: string;
  filmConnection: {
    films: {
      title: string;
    };
  };
}

export interface vehiculeTypes {
  id: string;
  name: string;
  vehicleClass: string;
  model: string;
  manufacturers: string[];
  length: string;
  crew: string;
  costInCredits: string;
  cargoCapacity: string;
  passengers: string;
  pilotConnection: {
    pilots: {
      name: string;
    };
  };
  filmConnection: {
    films: {
      title: string;
    };
  };
}

export type categoryTypes =
  | filmTypes
  | characterTypes
  | planetTypes
  | speciesTypes
  | vehiculeTypes;
