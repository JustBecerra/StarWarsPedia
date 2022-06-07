import { Box } from "@mui/system"
import SimpleCardInfo from "../atoms/SimpleCardInfo"

export default function Card(){
    return(
        <Box sx={{
            width: 930,
            height: 200,
            backgroundColor: '#ffffff',
            marginRight: 'auto',
            marginLeft: 'auto',
        }}>
            <SimpleCardInfo />
        </Box>
    )
}