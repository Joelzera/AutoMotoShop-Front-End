import { AppBar, Box, Button, Card, CardContent, Container, FormControl, Grid2, InputLabel, MenuItem, Select, SelectChangeEvent, TextField, Toolbar, Typography } from "@mui/material"
import SportsMotorsportsIcon from '@mui/icons-material/SportsMotorsports';
import ButtonMenu from "../components/ButtonMenu";
import { useNavigate } from "react-router-dom";
import teste from '../../img/melhor-capa-para-carro.jpg'
import { useState } from "react";



const Sell = () => {

    const navigate = useNavigate()
    const [marca, setMarca] = useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setMarca(event.target.value as string);
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

    return (
        <Grid2 sx={{ backgroundColor: '#ECEDF2', height: '100vh', mt: -2 }}>
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
                    <Box>
                        <Card>
                            <img src={teste} />
                            <CardContent>
                                <TextField label="nome"></TextField>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Marca</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={marca}
                                        onChange={handleChange}
                                    >
                                        {todasMarcas.map((item) => (
                                            <MenuItem key={item.id} value={item.marca}>
                                                {item.marca}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                                <TextField label="ano"></TextField>
                                <TextField label="motor"></TextField>
                                <TextField label="modelo"></TextField>
                                <Select label='tipo'></Select>
                                <TextField label="cor"></TextField>
                                <TextField label="cambio"></TextField>
                                <TextField label="combustivel"></TextField>
                                <TextField label="quilometragem"></TextField>
                                <TextField label="preço"></TextField>
                            </CardContent>
                        </Card>
                    </Box>
                </Grid2>
            </Container>
        </Grid2>
    )
}

export default Sell