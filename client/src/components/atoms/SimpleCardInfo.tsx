import { Typography } from "@mui/material";

export default function SimpleCardInfo(){
    return(
        <>
            <Typography
                variant="h5"
                color="#be9c65"
            >
                name of person/planet/ship
            </Typography>
            <Typography
                variant="h5"
            >
                species of person/model of ship/population of planet
            </Typography>
        </>
    )
}