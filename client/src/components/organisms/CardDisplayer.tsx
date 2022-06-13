import { Box, Container } from "@mui/system";
import Card from "../molecules/Card";
import { useQuery, gql } from '@apollo/client';

export default function CardDisplayer(){
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
    const { loading, error, data } = useQuery(ALL_FILMS);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    
    return(
        <Container>
            <Box
                sx={{
                    width: 1000,
                    height: 'fit-content',
                    backgroundColor: '#13191a',
                    marginRight: 'auto',
                    marginLeft: 'auto',
                    marginTop: 11,
                    paddingTop: 5,
                }}
            >
                {data.allFilms.films.map((film: any) => {
                    console.log(film)
                    return <Card key={film.episodeID} film={film}/>
                })}
            </Box>
        </Container>
    )
}