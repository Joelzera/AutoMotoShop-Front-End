import { alpha, AppBar, Box, Button, Card, CardContent, CardMedia, Grid2, InputBase, styled, Toolbar, Typography } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';
import SportsMotorsportsIcon from '@mui/icons-material/SportsMotorsports';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css"
import imagem from '../../img/logo bmw.webp'
import imagem1 from '../../img/logo byd.jpg'
import imagem2 from '../../img/logo chev.jpg'
import imagem3 from '../../img/logo ford.webp'
import imagem4 from '../../img/logo honda.jpg'
import imagem5 from '../../img/logo toyota.webp'
import imagem6 from '../../img/logo volks.jpg'
import imagem7 from '../../img/logo fiat.webp'
import imagem8 from '../../img/logo nissan.jpg'
import imagem9 from '../../img/Logotipo-da-Ram-2.jpg'
import imagem10 from '../../img/Mercedes-Benz-Logo.png'
import banner from '../../img/honda-civic-banner-1.png'
import banner2 from '../../img/bmw-banner-2.jpg'
import banner3 from '../../img/virtus.jpg'
import banner4 from '../../img/bydBanner.jpg'
import teste from '../../img/semninovos-encerramento.webp'
import { useEffect, useState } from "react";
import axios from "axios";




const Home = () => {

    interface myCarObject {
        id: string,
        nome: string,
        marca: string,
        ano: number,
        motor:number,
        modelo: string,
        tipo: string,
        cor: string,
        cambio: string,
        combustivel: string,
        quilometragem: number,
        preço: number,
        ativo: boolean
    }

    const [sellCar, setSellCar] = useState<myCarObject[]>([])

    const responsivoBanner = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1,
            slidesToSlide: 1  // opcional, padrão 1. 
        },
        desktop2: {
            breakpoint: { max: 1440, min: 1095 },
            items: 1,
            slidesToSlide: 1  // opcional, padrão 1. 
        },
        tablet: {
            breakpoint: { max: 1024, min: 876 },
            items: 1,
            slidesToSlide: 1  // opcional, padrão 1. 
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1  // opcional, padrão 1. 
        }
    };



    const responsivo = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 6,
            slidesToSlide: 6  // opcional, padrão 1. 
        },
        desktop2: {
            breakpoint: { max: 1440, min: 1095 },
            items: 6,
            slidesToSlide: 6  // opcional, padrão 1. 
        },
        tablet: {
            breakpoint: { max: 1024, min: 876 },
            items: 4,
            slidesToSlide: 4  // opcional, padrão 1. 
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 2,
            slidesToSlide: 2  // opcional, padrão 1. 
        }
    };

    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    }));


    const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }));

    const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        width: '100%',
        '& .MuiInputBase-input': {
            padding: theme.spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(4)})`,
            transition: theme.transitions.create('width'),
            [theme.breakpoints.up('sm')]: {
                width: '12ch',
                '&:focus': {
                    width: '20ch',
                },
            },
        },
    }));

    useEffect(() => {
        const ativo = true
        const getCar = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/car/all/${ativo}`)
                setSellCar(response.data)
            } catch (error) {
                console.log(error, 'deu um erro')
            }
        }
        getCar()
    }, [])

    useEffect(() => {
        if (sellCar.length > 0) {
            console.log(sellCar)
        }
    }, [sellCar])


    return (

        <Box sx={{ flexGrow: 1 }}>
            <Grid2 container >
                <AppBar position="fixed"
                    sx={{
                        color: "#1a1a1a",
                        backgroundColor: 'white',
                        boxShadow: 'none',
                    }}>
                    <Toolbar sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <SportsMotorsportsIcon sx={{ padding: 1, color: '#3b06b6' }} fontSize="large" />
                        <Typography variant="h6" >
                            AutoMotoShop
                        </Typography>
                        <Search sx={{ border: '1px solid #B0B0B0', borderRadius: '4px', flexGrow: 0.2 }}>
                            <SearchIconWrapper>
                                <SearchIcon />
                            </SearchIconWrapper>
                            <StyledInputBase
                                placeholder="Procurar"
                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </Search>
                        <Button color="inherit" sx={{ marginLeft: 1 }}>Comprar</Button>
                        <Button color="inherit" sx={{ marginLeft: 1 }}>Vender</Button>
                        <Button variant="contained" sx={{ backgroundColor: '#3b06b6', color: "fff", marginLeft: 1 }}>Entrar</Button>
                    </Toolbar>
                </AppBar>
                <Grid2 size={{ xs: 12, md: 12, lg: 12 }} sx={{ marginLeft: 20, marginRight: 20 }}>
                    <Carousel

                        responsive={responsivoBanner}
                        infinite={true}
                        autoPlay={true}
                        autoPlaySpeed={3000}
                        keyBoardControl={true}
                        dotListClass="custom-dot-list-style"
                        itemClass="carousel-item-padding-40-px">
                        <img src={banner} height='90%' width='100%' style={{ marginTop: 30 }} />
                        <img src={banner2} height='90%' width='100%' style={{ marginTop: 30 }} />
                        <img src={banner3} height='90%' width='100%' style={{ marginTop: 30 }} />
                        <img src={banner4} height='90%' width='100%' style={{ marginTop: 30 }} />
                    </Carousel>
                    <Typography variant="h4">Marcas</Typography>
                    <Carousel
                        responsive={responsivo}
                        infinite={true}
                        autoPlay={true}
                        autoPlaySpeed={3000}
                        keyBoardControl={true}
                        dotListClass="custom-dot-list-style"
                        itemClass="carousel-item-padding-40-px">
                        <img src={imagem} height='70%' width='95%' style={{ borderRadius: 20, border: '1px solid' }} />
                        <img src={imagem1} height='70%' width='95%' style={{ borderRadius: 20, border: '1px solid' }} />
                        <img src={imagem2} height='70%' width='95%' style={{ borderRadius: 20, border: '1px solid' }} />
                        <img src={imagem3} height='70%' width='95%' style={{ borderRadius: 20, border: '1px solid' }} />
                        <img src={imagem4} height='70%' width='95%' style={{ borderRadius: 20, border: '1px solid' }} />
                        <img src={imagem5} height='70%' width='95%' style={{ borderRadius: 20, border: '1px solid' }} />
                        <img src={imagem6} height='70%' width='95%' style={{ borderRadius: 20, border: '1px solid' }} />
                        <img src={imagem7} height='70%' width='95%' style={{ borderRadius: 20, border: '1px solid' }} />
                        <img src={imagem8} height='70%' width='95%' style={{ borderRadius: 20, border: '1px solid' }} />
                        <img src={imagem9} height='70%' width='95%' style={{ borderRadius: 20, border: '1px solid' }} />
                        <img src={imagem10} height='70%' width='95%' style={{ borderRadius: 20, border: '1px solid' }} />
                    </Carousel>
                    <Typography variant="h4">Carros a venda</Typography>
                    <Box sx={{ display: 'flex', gap: 2, width: '100' }}>
                        {sellCar.map((car) => (
                            <Card key={car.id} sx={{ maxWidth: 300, width: 300, border: '1px solid' }}>
                                <CardMedia sx={{ height: 140 }} image={teste} />
                                <CardContent>
                                    <Typography variant="h4">{car.nome}</Typography>
                                    <Box sx={{ display: 'flex', gap: 1}}>
                                    <Typography variant="h6">{car.motor}</Typography>
                                    <Typography variant="h6">{car.modelo}</Typography>
                                    <Typography variant="h6">{car.combustivel}</Typography>
                                    </Box>
                                    <Typography variant="h6">{car.ano}</Typography>
                                    <Typography variant="h6">km {car.quilometragem}</Typography>
                                    <Button variant="contained" sx={{ backgroundColor: '#3b06b6', color: "fff" }}>Detalhes</Button>
                                </CardContent>
                            </Card>
                        ))}
                    </Box>
                </Grid2>
            </Grid2>
        </Box>

    )
}

export default Home