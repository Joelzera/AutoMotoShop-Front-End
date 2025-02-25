import { AppBar, Box, Button, Card, CardContent, Grid2, TextField, Toolbar, Typography } from "@mui/material"
import SportsMotorsportsIcon from '@mui/icons-material/SportsMotorsports';
import ButtonMenu from "../components/ButtonMenu";


const Login = () => {



    return (
        <>
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
                    <Button variant="contained"  sx={{ backgroundColor: '#3b06b6', color: "fff" }}>Cadastrar</Button>
                </Toolbar>
            </AppBar>
            <Grid2 size={{ xs: 12, md: 12, lg: 12 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                <ButtonMenu/>
                
                    <Card sx={{ mt: 2, border: '1px solid', maxWidth: 400 }}>
                        <CardContent>
                            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 5 }}>
                                <Typography variant="h5">
                                    Digite seu email e senha
                                </Typography>
                                <TextField label='email' sx={{ mt: 2 }}>Email</TextField>
                                <TextField label='senha' sx={{ mt: 2 }}>Senha</TextField>
                                <Button variant="contained" sx={{ backgroundColor: '#3b06b6', mt: 2 }}>Entrar</Button>
                            </Box>
                        </CardContent>
                    </Card>
                </Box>
            </Grid2>
        </>
    )
}

export default Login