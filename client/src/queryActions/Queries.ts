import { gql } from '@apollo/client';

export default function Queries(action:string){
    switch(action){
        case 'Films':
            const ALL_FILMS = gql`
                query Query {
                    allFilms {
                        films {
                            title
                            episodeID
                            releaseDate
                            director
                            openingCrawl
                        }
                    }
                }      
            `;
            return ALL_FILMS;
        case 'Characters':
            const ALL_CHARACTERS=gql`
                query Query {
                    allPeople {
                    people {
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
            `
            return ALL_CHARACTERS;
        case 'Planets':
            const ALL_PLANETS = gql`
            query Query {
                allPlanets {
                  planets {
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
            `
            return ALL_PLANETS;
        case 'Species':
            const ALL_SPECIES = gql`
            query Query {
                allSpecies {
                  species {
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
            `
            return ALL_SPECIES;
        case 'Vehicules':
            const ALL_VEHICULES = gql`
            query Query {
                allVehicles {
                  vehicles {
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
              
            `
            return ALL_VEHICULES;
        default:
            return null;
    }
}