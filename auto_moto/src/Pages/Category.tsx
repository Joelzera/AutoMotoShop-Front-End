import { Container, Grid2, Typography } from "@mui/material"
import AppBarComponent from "../components/AppBarComponent"
import ButtonMenu from "../components/ButtonMenu"

const Category = () => {
    return(
        <>
        <AppBarComponent/>
        <Container>
            <Grid2 size={{ xs: 12, md: 12, lg: 12 }}>
            <ButtonMenu/>
            <Typography>Categorias</Typography>
            </Grid2>
        </Container>
        </>
    )
}

export default Category