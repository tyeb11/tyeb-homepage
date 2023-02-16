import { Box } from "@chakra-ui/react"



const Footer=()=>{
    return(
        <Box align="center" opacity={.4} fontSize="sm">
            &copy; {new Date().getFullYear()} Tayyeb Vhora. All Rights Reserved.
        </Box>
    )
}


export default Footer