import { AppBar, Box, Button, Card, CardContent, Container, FormControl,  Grid2, MenuItem, Select, TextField, Toolbar, Typography } from "@mui/material"
import SportsMotorsportsIcon from '@mui/icons-material/SportsMotorsports';
import { useNavigate } from "react-router-dom";
import teste from '../../img/TesteCapa.jpg'
import { useState } from "react";
import axios from "axios";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Sell = () => {

    const navigate = useNavigate()
    const [car, setCar] = useState({
        nome: "",
        marca: "",
        ano: "",
        motor: "",
        modelo: "",
        tipo: "",
        cor: "",
        cambio: "",
        combustivel: "",
        quilometragem: "",
        preço: ""
    })

    const handleChange = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
            const response = await axios.post(`http://localhost:5000/car`, car)
            console.log(response.data)
        } catch (error) {
            console.log(error, 'erro ao registrar o carro')
        }
    };

    const todasMarcas = [
        { id: 1, marca: 'bmw' },
        { id: 2, marca: 'byd' },
        { id: 3, marca: 'chevrolet' },
        { id: 4, marca: 'ford' },
        { id: 5, marca: 'honda' },
        { id: 6, marca: 'toyota' },
        { id: 7, marca: 'volkswagem' },
        { id: 8, marca: 'fiat' },
        { id: 9, marca: 'nissan' },
        { id: 10, marca: 'ram' },
        { id: 11, marca: 'mercedes' },
        { id: 12, marca: 'hyundai' },
    ]

    const tipoCarro = [
        { id: 1, tipo: 'sedan' },
        { id: 2, tipo: 'hatch' },
        { id: 3, tipo: 'eletrico' },
        { id: 4, tipo: 'picape' },
        { id: 5, tipo: 'suv' },
    ]

    return (
        <Grid2 sx={{ backgroundColor: '#ECEDF2', height: '100%', mt: -2 }}>
            <AppBar position="fixed"
                sx={{
                    color: "#1a1a1a",
                    backgroundColor: 'white',
                    boxShadow: 'none',
                }}>
                <Toolbar>
                    <SportsMotorsportsIcon sx={{ padding: 1, color: '#3b06b6' }} fontSize="large" />
                    <Typography variant="h6" fontWeight={800} flexGrow={1}>
                        AutoMotoShop
                    </Typography>
                    <Button variant="contained"
                            onClick={() => navigate('/')}
                            startIcon={<ArrowBackIcon/>} 
                            sx={{ backgroundColor: '#3b06b6', color: "fff" }}>Menu</Button>
                    <Button variant="contained" 
                            onClick={() => navigate('/login')} 
                            sx={{ backgroundColor: '#3b06b6', color: "fff", marginLeft: 1 }}>Entrar</Button>
                </Toolbar>
            </AppBar>
            <Container>
                <Grid2 container justifyContent="center">
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%',  mt: 12 }}>
                        <Card sx={{ width: '80%' }}>
                            <img src={teste} />
                            <CardContent>
                                <form onSubmit={handleChange} style={{ display: 'flex', flexDirection: 'column' }}>
                                    <Grid2 container spacing={2}>
                                        <Grid2  size={{xs:12, sm:6}} >
                                            <Typography variant="body1">Nome</Typography>
                                            <TextField fullWidth value={car.nome} onChange={(e) => setCar({ ...car, nome: e.target.value })} />
                                        </Grid2>
                                        <Grid2  size={{xs:12, sm:6}}>
                                            <Typography variant="body1">Marca</Typography>
                                            <FormControl fullWidth>
                                                <Select value={car.marca} onChange={(e) => setCar({ ...car, marca: e.target.value })}>
                                                    {todasMarcas.map((item) => (
                                                        <MenuItem key={item.id} value={item.marca}>
                                                            {item.marca}
                                                        </MenuItem>
                                                    ))}
                                                </Select>
                                            </FormControl>
                                        </Grid2>
                                        <Grid2 size={{xs:12, sm:6}}>
                                            <Typography variant="body1">Ano</Typography>
                                            <TextField fullWidth value={car.ano} onChange={(e) => setCar({ ...car, ano: e.target.value })} />
                                        </Grid2>
                                        <Grid2 size={{xs:12, sm:6}}>
                                            <Typography variant="body1">Motor</Typography>
                                            <TextField fullWidth value={car.motor} onChange={(e) => setCar({ ...car, motor: e.target.value })} />
                                        </Grid2>
                                        <Grid2 size={{xs:12, sm:6}}>
                                            <Typography variant="body1">Modelo</Typography>
                                            <TextField fullWidth value={car.modelo} onChange={(e) => setCar({ ...car, modelo: e.target.value })} />
                                        </Grid2>
                                        <Grid2 size={{xs:12, sm:6}}>
                                            <Typography variant="body1">Tipo</Typography>
                                            <FormControl fullWidth>
                                                <Select value={car.tipo} onChange={(e) => setCar({ ...car, tipo: e.target.value })}>
                                                    {tipoCarro.map((item) => (
                                                        <MenuItem key={item.id} value={item.tipo}>
                                                            {item.tipo}
                                                        </MenuItem>
                                                    ))}
                                                </Select>
                                            </FormControl>
                                        </Grid2>
                                        <Grid2 size={{xs:12, sm:6}}>
                                            <Typography variant="body1">Cor</Typography>
                                            <TextField fullWidth value={car.cor} onChange={(e) => setCar({ ...car, cor: e.target.value })} />
                                        </Grid2>
                                        <Grid2 size={{xs:12, sm:6}}>
                                            <Typography variant="body1">Câmbio</Typography>
                                            <TextField fullWidth value={car.cambio} onChange={(e) => setCar({ ...car, cambio: e.target.value })} />
                                        </Grid2>
                                        <Grid2 size={{xs:12, sm:6}}>
                                            <Typography variant="body1">Combustível</Typography>
                                            <TextField fullWidth value={car.combustivel} onChange={(e) => setCar({ ...car, combustivel: e.target.value })} />
                                        </Grid2>
                                        <Grid2 size={{xs:12, sm:6}}>
                                            <Typography variant="body1">Km</Typography>
                                            <TextField fullWidth value={car.quilometragem} onChange={(e) => setCar({ ...car, quilometragem: e.target.value })} />
                                        </Grid2>
                                        <Grid2 size={{xs:12, sm:6}}>
                                            <Typography variant="body1">Preço</Typography>
                                            <TextField fullWidth value={car.preço} onChange={(e) => setCar({ ...car, preço: e.target.value })} />
                                        </Grid2>
                                    </Grid2>
                                    <Button variant="contained" style={{ marginTop: 10 }} type="submit" sx={{ backgroundColor: '#3b06b6', color: "fff" }}>Publicar</Button>
                                </form>
                            </CardContent>
                        </Card>
                    </Box>
                </Grid2>
            </Container>
        </Grid2>
    )
}

export default Sell;