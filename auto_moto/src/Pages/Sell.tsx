import { AppBar, Button, Container, Grid2, Toolbar, Typography } from "@mui/material"
import SportsMotorsportsIcon from '@mui/icons-material/SportsMotorsports';
import ButtonMenu from "../components/ButtonMenu";
import { useNavigate } from "react-router-dom";




const Sell = () => {

    const navigate = useNavigate()

    return(
        <Grid2 sx={{backgroundColor: '#ECEDF2', height: '100vh', mt: -2}}>
         <AppBar position="fixed"
                sx={{
                    color: "#1a1a1a",
                    backgroundColor: 'white',
                    boxShadow: 'none',
                    border: '1px solid'
                }}>
                <Toolbar>
                    <SportsMotorsportsIcon sx={{ padding: 1, color: '#3b06b6' }} fontSize="large" />
                    <Typography variant="h6" fontWeight={800} flexGrow={1}>
                        AutoMotoShop
                    </Typography>
                    <Button variant="contained" onClick={() => navigate('/login')}  sx={{ backgroundColor: '#3b06b6', color: "fff" }}>Entrar</Button>
                </Toolbar>
            </AppBar>
        <Container>
            <Grid2 size={{ xs: 12, md: 12, lg: 12 }}>
            <ButtonMenu/>
            <Typography>Vender</Typography>
            </Grid2>
        </Container>
        </Grid2>
    )
}

export default Sell