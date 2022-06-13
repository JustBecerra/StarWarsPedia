import { Box } from "@mui/system"
import { Typography } from "@mui/material"

export default function CompleteCardInfo({film}:any){
    return(
        <Box
            sx={{
                width: 600,
                height: 'fit-content',
                backgroundColor: '#13191a',
                // margin: 'auto',
                // marginTop: '50',
                // position:"absolute",
            }}
        >
            <Typography variant="h4">Episode {film.episodeID}: {film.title}</Typography>
            <Typography variant="h6">Directed by {film.director}</Typography>
            <Typography variant="h6">Released in {film.releaseDate}</Typography>
            <Typography variant="body1">{film.openingCrawl}</Typography>
        </Box>
    )
}