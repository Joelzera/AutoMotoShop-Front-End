import { AppBar, Box, Button, Card, CardContent, Container, FormControl, Grid2, InputLabel, MenuItem, Select,  TextField, Toolbar, Typography } from "@mui/material"
import SportsMotorsportsIcon from '@mui/icons-material/SportsMotorsports';
import ButtonMenu from "../components/ButtonMenu";
import { useNavigate } from "react-router-dom";
import teste from '../../img/melhor-capa-para-carro.jpg'
import { useState } from "react";
import axios from "axios";



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
                    border: '1px solid'
                }}>
                <Toolbar>
                    <SportsMotorsportsIcon sx={{ padding: 1, color: '#3b06b6' }} fontSize="large" />
                    <Typography variant="h6" fontWeight={800} flexGrow={1}>
                        AutoMotoShop
                    </Typography>
                    <Button variant="contained" onClick={() => navigate('/login')} sx={{ backgroundColor: '#3b06b6', color: "fff" }}>Entrar</Button>
                </Toolbar>
            </AppBar>
            <Container>
                <Grid2 size={{ xs: 12, md: 12, lg: 12 }}>
                    <ButtonMenu />
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Card sx={{ width: '50%' }}>
                            <img src={teste} />
                            <CardContent sx={{ display: 'flex', flexDirection: 'column' }}>
                                <form onSubmit={handleChange}>
                                    <TextField label="nome" value={car.nome} onChange={(e) => setCar({...car, nome: e.target.value})}></TextField>
                                    <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label">Marca</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={car.marca }
                                            onChange={(e) => setCar({...car, marca: e.target.value})}
                                        >
                                            {todasMarcas.map((item) => (
                                                <MenuItem key={item.id} value={item.marca}>
                                                    {item.marca}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                    <TextField label="ano" value={car.ano} onChange={(e) => setCar({...car, ano: e.target.value})}></TextField>
                                    <TextField label="motor" value={car.motor} onChange={(e) => setCar({...car, motor: e.target.value})}></TextField>
                                    <TextField label="modelo" value={car.modelo} onChange={(e) => setCar({...car, modelo: e.target.value})}></TextField>

                                    <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label">tipo</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={car.tipo }
                                            onChange={(e) => setCar({...car, tipo: e.target.value})}
                                        >
                                            {tipoCarro.map((item) => (
                                                <MenuItem key={item.id} value={item.tipo}>
                                                    {item.tipo}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                    <TextField label="cor" value={car.cor} onChange={(e) => setCar({...car, cor: e.target.value})}></TextField>
                                    <TextField label="cambio" value={car.cambio} onChange={(e) => setCar({...car, cambio: e.target.value})}></TextField>
                                    <TextField label="combustivel" value={car.combustivel} onChange={(e) => setCar({...car, combustivel: e.target.value})}></TextField>
                                    <TextField label="quilometragem" value={car.quilometragem} onChange={(e) => setCar({...car, quilometragem: e.target.value})}></TextField>
                                    <TextField label="preço" value={car.preço} onChange={(e) => setCar({...car, preço: e.target.value})}></TextField>
                                    <Button variant="contained" type="submit" sx={{ backgroundColor: '#3b06b6', color: "fff" }} >Publicar</Button>
                                </form>
                            </CardContent>
                        </Card>
                    </Box>
                </Grid2>
            </Container>
        </Grid2>
    )
}

export default Sell