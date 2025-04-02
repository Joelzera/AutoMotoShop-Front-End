import { AppBar, Box, Button, Container, Grid2, ListItemButton, ListItemIcon, Toolbar, Typography } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SportsMotorsportsIcon from '@mui/icons-material/SportsMotorsports';
import { useNavigate } from "react-router-dom";
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import TwoWheelerIcon from '@mui/icons-material/TwoWheeler';


const SellType = () => {

    const navigate = useNavigate()

    return (
        <Grid2 sx={{ backgroundColor: '#ECEDF2', height: '100vh' }}>
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
                    <Button variant="contained"
                        onClick={() => navigate('/')}
                        startIcon={<ArrowBackIcon />}
                        sx={{ backgroundColor: '#3b06b6', color: "fff" }}>Menu</Button>
                    <Button variant="contained"
                        onClick={() => navigate('/login')}
                        sx={{ backgroundColor: '#3b06b6', color: "fff", marginLeft: 1 }}>Entrar</Button>
                </Toolbar>
            </AppBar>
            <Container>
                <Grid2 container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
                    <Box sx={{  mt: 30 }}>
                        <ListItemButton sx={{ backgroundColor: '#fff', border: '1px solid', borderRadius: 2, height: 100,  width: 300, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                            <ListItemIcon>
                                <DirectionsCarIcon sx={{ color: '#3b06b6'}}/>
                            </ListItemIcon>
                            <Typography sx={{ color:"#696969"}}>Vender</Typography>
                            <Typography marginLeft={1} sx={{ color:"#696969"}}>Carro</Typography>
                        </ListItemButton>
                    </Box>
                    <Box sx={{  mt: 10 }}>
                        <ListItemButton sx={{ backgroundColor: '#fff', border: '1px solid', borderRadius: 2, height: 100,  width: 300, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                            <ListItemIcon >
                                <TwoWheelerIcon sx={{ color: '#3b06b6'}}/>
                            </ListItemIcon>
                            <Typography sx={{ color:"#696969"}}>Vender</Typography>
                            <Typography marginLeft={1} sx={{ color:"#696969"}}>Moto</Typography>
                        </ListItemButton>
                    </Box>
                    
                </Grid2>
            </Container>
        </Grid2>
    )
}

export default SellType;