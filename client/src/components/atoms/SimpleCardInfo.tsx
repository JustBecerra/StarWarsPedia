import { Typography } from "@mui/material";

export default function SimpleCardInfo({title, releaseDate} : any) {
   
    return(
        <>
            <Typography
                variant="h5"
                color="#be9c65"
            >
                {title}
            </Typography>
            <Typography
                variant="h5"
                color="#be9c65"
            >
                Release date: {releaseDate}
            </Typography>
        </>
    )
}