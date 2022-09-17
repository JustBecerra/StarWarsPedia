import { Box } from "@mui/system"
import { Typography } from "@mui/material"

export default function CompleteCardInfo({categ}:any){
    return(
        <Box
            sx={{
                width: 600,
                height: 'fit-content',
                backgroundColor: '#13191a',
                position:"absolute",
                top:'50%',
                left:'50%',
                transform: 'translate(-50%, -50%)',
                border: '2px solid #be9c65',
            }}
        >
            <Typography variant="h4" color="#be9c65">Episode {film.episodeID}: {film.title}</Typography>
            <Typography variant="h6" color="#be9c65">Directed by {film.director}</Typography>
            <Typography variant="h6" color="#be9c65">Released in {film.releaseDate}</Typography>
            <Typography variant="body1" color="#be9c65">{film.openingCrawl}</Typography>
        </Box>
    )
}