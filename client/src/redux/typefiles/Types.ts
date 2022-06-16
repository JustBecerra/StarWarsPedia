export interface filmTypes {
  title: string,
  episodeID: number,
  releaseDate: string,
  director: string,
  openingCrawl: string,
}

export interface charactersTypes {
  people: {
    birthYear: string,
  }
  homeworld: {
    name: string,
  }
  name: string,
  species: {
    name: string,
  }
  height: string,
  gender: string,
}

export interface planetsTypes {
  planets: {
    name: string,
  },
  filmConnection: {
    films: {
      title: string,
    }
  }
  population: number,
  terrains: string,
  residentConnection: {
    residents: {
      species: {
        name: string,
      }
    }
  }
}

export interface speciesTypes {
  species: {
    averageHeight: number
    averageLifespan: number
    classification: string
    designation: string
    homeworld: {
      name: string
    },
    name: string
    language: string
    filmConnection: {
      films: {
        title: string
      }
    }
  }
}

export interface vehiculeTypes {
  vehicles: {
    name: string
    vehicleClass: string
    model: string
    manufacturers: string
    length: number
    crew: number
    costInCredits: number
    cargoCapacity: number
    passengers: number
    pilotConnection: {
      pilots: {
        name: string
      }
    }
    filmConnection: {
      films: {
        title: string
      }
    }
  }
}



