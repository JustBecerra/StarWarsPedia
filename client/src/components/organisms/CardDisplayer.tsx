import { Box, Container } from "@mui/system";
import Card from "../molecules/Card";
import { RootState } from "../../redux/store";
import { useSelector } from "react-redux";
import { DocumentNode, useQuery } from "@apollo/client";
import { ALL_FILMS, ALL_CHARACTERS, ALL_SPECIES, ALL_VEHICULES, ALL_PLANETS } from "../../GQLs";

export default function CardDisplayer(){
    const categoryID = useSelector((state:RootState) => state.CategoryID.currentCategory);
    let category: DocumentNode;
    switch(categoryID){
        case "ALL_FILMS":
            category = ALL_FILMS;
            break;
        case "ALL_CHARACTERS":
            category = ALL_CHARACTERS;
            break;
        case "ALL_SPECIES":
            category = ALL_SPECIES;
            break;
        case "ALL_VEHICULES":
            category = ALL_VEHICULES;
            break;
        case "ALL_PLANETS":
            category = ALL_PLANETS;
            break;
        default:
            category = ALL_FILMS;
    }
    const { loading, error, data } = useQuery(category);
    console.log(data)
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
                {/* {data.allPlanets.planets.map((film: any) => {
                    console.log(film)
                    return <Card key={film.episodeID} film={film}/>
                })} */}
            </Box>
        </Container>
    )
}