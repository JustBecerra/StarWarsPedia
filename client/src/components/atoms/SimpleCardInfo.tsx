import { Typography } from "@mui/material";

export default function SimpleCardInfo({title, releaseDate} : any) {
    console.log(title)
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
            >
                Release date: {releaseDate}
            </Typography>
        </>
    )
}