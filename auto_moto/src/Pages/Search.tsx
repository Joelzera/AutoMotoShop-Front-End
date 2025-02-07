import { Box, Container, Grid2, Typography } from "@mui/material"
import AppBarComponent from "../components/AppBarComponent"

const Search = () =>{
    
    return(
        <>
        <AppBarComponent/>
        <Container>
        <Grid2 size={{ xs: 12, md: 12, lg: 12 }}>
            <Box sx={{ mt: 10}}>
                <Typography variant='h4'>Resultados para:</Typography>
            </Box>
        </Grid2>
        </Container>
        </>
    )
}

export default Search