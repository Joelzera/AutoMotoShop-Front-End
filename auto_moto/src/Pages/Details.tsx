import { AppBar, Box, Button, Card, CardContent, Container, Grid2, Toolbar, Typography } from "@mui/material"
import SportsMotorsportsIcon from '@mui/icons-material/SportsMotorsports';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import banner1 from '../../img/bannerCivic.webp'
import banner2 from '../../img/bannerCorolla.png'
import banner3 from '../../img/bannerByd.jpg'
import banner4 from '../../img/bannerByd1.jpg'
import banner5 from '../../img/bannerVirtus.jpg'
import ClearIcon from '@mui/icons-material/Clear';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

const Details = () => {

    const responsivoBanner = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 3  // opcional, padrão 1. 
        },
        desktop2: {
            breakpoint: { max: 1440, min: 1095 },
            items: 3,
            slidesToSlide: 3  // opcional, padrão 1. 
        },
        tablet: {
            breakpoint: { max: 1024, min: 876 },
            items: 3,
            slidesToSlide: 3  // opcional, padrão 1. 
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 3,
            slidesToSlide: 3  // opcional, padrão 1. 
        }
    };

    const imagemBanner = [

        { id: 1, src: banner1 },
        { id: 2, src: banner2 },
        { id: 3, src: banner3 },
        { id: 4, src: banner4 },
        { id: 5, src: banner5 }
    ]

    interface myCarObject {
        id: string,
        nome: string,
        marca: string,
        ano: string,
        motor: string,
        modelo: string,
        tipo: string,
        cor: string,
        cambio: string,
        combustivel: string,
        quilometragem: string,
        preço: string,
        ativo: boolean
    }

    const [sellCar, setSellCar] = useState<myCarObject[]>([])
    const navigate = useNavigate()
    const detalheCarro = localStorage.getItem('detalhes')

    useEffect(() => {
        const buscarDetalhesDoCarro = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/car/${detalheCarro}`)
                console.log(response.data[0])
                setSellCar(response.data)
            } catch (error) {
                console.log(error, 'erro ao buscar o carro pela marca')
            }
        }
        buscarDetalhesDoCarro()
    }, [])

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
                    <Button variant="contained"
                        onClick={() => navigate('/login')}
                        sx={{ backgroundColor: '#3b06b6', color: "fff", marginLeft: 1 }}>Entrar</Button>
                </Toolbar>
            </AppBar>
            <Carousel
                responsive={responsivoBanner}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={3000}
                keyBoardControl={true}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px">
                {imagemBanner.map((imagem) => (
                    <img key={imagem.id} src={imagem.src} height='100%' width='99%' />
                ))}
            </Carousel>
            <Container>
                <Box sx={{ display: 'flex', gap: 1, mt: 2, flexWrap: 'wrap' }}>
                    {sellCar.map((car) => (
                        <Card key={car.id} sx={{ maxWidth: '100%', width: '100%', border: '1px solid' }}>
                            <CardContent>
                                <Grid2 container>
                                    <Grid2 size={{ xs: 12, sm: 12 }}>
                                        <Box sx={{ display: 'flex' }}>
                                            <Typography variant="h4" sx={{ fontWeight: 'bold' }}>{car.marca}</Typography>
                                            <Typography variant="h4" sx={{ fontWeight: 'bold', marginLeft: 1, color: '#3b06b6', flexGrow: 1 }}>{car.nome}</Typography>
                                            <ClearIcon onClick={() => navigate('/')} sx={{ cursor: 'pointer', fontWeight: 'bold' }} />
                                        </Box>

                                        <Box sx={{ display: 'flex', gap: 1 }}>
                                            <Typography variant="h6" color="#696969">{car.motor}</Typography>
                                            <Typography variant="h6" color="#696969">{car.modelo}</Typography>
                                            <Typography variant="h6" color="#696969">{car.combustivel}</Typography>
                                        </Box>
                                    </Grid2>
                                    <Grid2 size={{ xs: 4, sm: 4 }}>
                                        <Typography variant="h6" mt={5} color="#696969">Ano</Typography>
                                        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>{car.ano}</Typography>
                                    </Grid2>
                                    <Grid2 size={{ xs: 4, sm: 4 }}>
                                        <Typography variant="h6" mt={5} color="#696969">Km</Typography>
                                        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>{car.quilometragem}</Typography>
                                    </Grid2 >
                                    <Grid2 size={{ xs: 4, sm: 4 }}>
                                        <Typography variant="h6" mt={5} color="#696969">Cambio</Typography>
                                        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>{car.cambio}</Typography>
                                    </Grid2 >
                                    <Grid2 size={{ xs: 4, sm: 4 }}>
                                        <Typography variant="h6" mt={5} color="#696969">Tipo</Typography>
                                        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>{car.tipo}</Typography>
                                    </Grid2 >
                                    <Grid2 size={{ xs: 4, sm: 4 }}>
                                        <Typography variant="h6" mt={5} color="#696969">Cor</Typography>
                                        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>{car.cor}</Typography>
                                    </Grid2 >
                                    <Grid2 size={{ xs: 4, sm: 4 }}>
                                        <Typography variant="h6" mt={5} color="#696969">Preço</Typography>
                                        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>R$ {car.preço}</Typography>
                                    </Grid2 >
                                    <Grid2 size={{ xs: 4, sm: 4 }}>
                                        <Button variant="contained"
                                          startIcon={<AttachMoneyIcon/>}
                                          sx={{ backgroundColor: '#3b06b6', color: "fff", mt: 5 }}>Comprar</Button>
                                    </Grid2 >
                                </Grid2>
                            </CardContent>
                        </Card>
                    ))}
                </Box>
            </Container>
        </Grid2>
    )
}

export default Details