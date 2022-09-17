import { gql } from "@apollo/client";

export const ALL_FILMS = gql`
  query Query {
    allFilms {
      films {
        id
        title
        episodeID
        releaseDate
        director
        openingCrawl
      }
    }
  }
`;

export const ALL_CHARACTERS = gql`
  query Query {
    allPeople {
      people {
        id
        birthYear
        homeworld {
          name
        }
        name
        species {
          name
        }
        height
        gender
      }
    }
  }
`;

export const ALL_PLANETS = gql`
  query Query {
    allPlanets {
      planets {
        id
        name
        filmConnection {
          films {
            title
          }
        }
        population
        terrains
        residentConnection {
          residents {
            species {
              name
            }
          }
        }
      }
    }
  }
`;

export const ALL_SPECIES = gql`
  query Query {
    allSpecies {
      species {
        id
        averageHeight
        averageLifespan
        classification
        designation
        homeworld {
          name
        }
        name
        language
        filmConnection {
          films {
            title
          }
        }
      }
    }
  }
`;

export const ALL_VEHICULES = gql`
  query Query {
    allVehicles {
      vehicles {
        id
        name
        vehicleClass
        model
        manufacturers
        length
        crew
        costInCredits
        cargoCapacity
        passengers
        pilotConnection {
          pilots {
            name
          }
        }
        filmConnection {
          films {
            title
          }
        }
      }
    }
  }
`;
