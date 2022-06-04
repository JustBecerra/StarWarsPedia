import { Typography } from "@mui/material";

export default function SimpleCardInfo(){
    return(
        <>
            <Typography
                variant="h3"
                color="#be9c65"
            >
                name of person/planet/ship
            </Typography>
            <Typography
                variant="h3"
            >
                species of person/model of ship/population of planet
            </Typography>
        </>
    )
}