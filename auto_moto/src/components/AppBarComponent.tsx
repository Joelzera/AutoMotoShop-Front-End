import { AppBar,  Box,  Button,  Toolbar, Typography } from "@mui/material";
import SportsMotorsportsIcon from '@mui/icons-material/SportsMotorsports';

import { useNavigate } from "react-router-dom";




const AppBarComponent = () => {

    const navigate = useNavigate()

    return (

        <AppBar position="fixed"
            sx={{
                color: "#1a1a1a",
                backgroundColor: 'white',
                boxShadow: 'none',
            }}>
            <Toolbar>
                <SportsMotorsportsIcon sx={{ padding: 1, color: '#3b06b6' }} fontSize="large" />
                <Typography variant="h6" fontWeight={800} flexGrow={0.5}>
                    AutoMotoShop
                </Typography>
                <Box flexGrow={0.6}>
                <Button variant="text" size="small" color="inherit" sx={{ padding: 1}} onClick={() => navigate('/comprar')}>Comprar</Button>
                <Button variant="text" size="small" color="inherit" sx={{ padding: 1}} onClick={() => navigate('/vender')}>Vender</Button>
                </Box>
                <Button variant="contained" size="small" sx={{ backgroundColor: '#3b06b6', color: "fff", fontFamily: 'cursive' }}  onClick={() => navigate('/login')}>Entrar</Button>
            </Toolbar>
        </AppBar>
    )
}

export default AppBarComponent