import { AppBar, Box, Button, Card, CardContent, Grid2, TextField, Toolbar, Typography } from "@mui/material"
import SportsMotorsportsIcon from '@mui/icons-material/SportsMotorsports';
import ClearIcon from '@mui/icons-material/Clear';
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";


const Register = () => {

    const navigate = useNavigate()

    const [register, setRegister] = useState({name: '', email: '', password: ''})

    const onSubmitRegister = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
            const response = await axios.post(`http://localhost:5000/user`, register)
            console.log(response.data)
            /*if(response){
                navigate('/')
            }*/
        } catch (error) {
            console.log(error, 'erro ao registrar o usuario')
        }
    }

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
                    <Button variant="contained" onClick={() => navigate('/login')}  sx={{ backgroundColor: '#3b06b6', color: "fff" }}>Entrar</Button>
                </Toolbar>
            </AppBar>
            <Grid2 size={{ xs: 12, md: 12, lg: 12 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mt: 10 }}>
                    <Card sx={{ mt: 10, border: '1px solid', maxWidth: 400 }}>
                    <ClearIcon onClick={() => navigate('/')} sx={{ cursor: 'pointer', padding: 2}}/>
                        <CardContent>
                            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                            <Typography variant="h5">
                                    Faça seu cadastro
                                </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 5 }}>
                                <form onSubmit={onSubmitRegister}>
                                <TextField id='name' label='Nome' sx={{ mt: 2 , width: '100%'}} onChange={(e) => setRegister({...register, name: e.target.value})}/>
                                <TextField id='email'label='E-mail' sx={{ mt: 2, width: '100%' }} onChange={(e) => setRegister({...register, email: e.target.value})}/>
                                <TextField id='password' label='Senha' sx={{ mt: 2, width: '100%' }} onChange={(e) => setRegister({...register, password: e.target.value})}/>
                                <Button variant="contained" type="submit" sx={{ backgroundColor: '#3b06b6', mt: 2, width: '100%' }}>Cadastrar-se</Button>
                                </form>
                            </Box>
                        </CardContent>
                    </Card>
                </Box>
            </Grid2>
        </>
    )
}

export default Register