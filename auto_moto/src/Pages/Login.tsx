import { Container, Grid2 } from "@mui/material"
import AppBarComponent from "../components/AppBarComponent"
import ButtonMenu from "../components/ButtonMenu";


const Login = () => {


    return(
        <>
        <AppBarComponent/>
        <Container>
            <Grid2 size={{ xs: 12, md: 12, lg: 12 }}>
                <ButtonMenu/>
            </Grid2>
        </Container>
        </>
    )
}

export default Login