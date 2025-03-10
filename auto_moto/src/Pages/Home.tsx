import {  Avatar, Box, Button, Card, CardContent, CardMedia, Container, Grid2, Typography } from "@mui/material"
import SportsMotorsportsIcon from '@mui/icons-material/SportsMotorsports';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css"
import imagem from '../../img/logo bmw.webp'
import imagem1 from '../../img/bydlogo.jpg'
import imagem2 from '../../img/chevy-logo-2011.png'
import imagem3 from '../../img/logo ford2.jpg'
import imagem4 from '../../img/logo honda.jpg'
import imagem5 from '../../img/logo toyota.webp'
import imagem6 from '../../img/logo volks.jpg'
import imagem7 from '../../img/fiat-automobiles2240.logowik.com.webp'
import imagem8 from '../../img/logo nissan.jpg'
import imagem9 from '../../img/Logotipo-da-Ram-2.jpg'
import imagem10 from '../../img/mercedes-logo-vetora-136350849.webp'
import imagem11 from '../../img/logohyundai.jpg'
import banner from '../../img/banner11.webp'
import banner1 from '../../img/modelBanner-1.webp'
import banner2 from '../../img/BannerPicape.webp'
import categ from '../../img/benzSedan.webp'
import categ1 from '../../img/eletrico.jpg'
import categ2 from '../../img/picape.jpg'
import categ3 from '../../img/suv.jpg'
import categ4 from '../../img/hatch.webp'
import teste from '../../img/melhor-capa-para-carro.jpg'
import { useEffect, useState } from "react";
import axios from "axios";
import AppBarComponent from "../components/AppBarComponent";
import { useNavigate } from "react-router-dom";


const Home = () => {

    const imagemLogo = [
        { id: 1, src: imagem, marca: 'bmw'},
        { id: 2, src: imagem1, marca: 'byd'},
        { id: 3, src: imagem2, marca: 'chevrolet'},
        { id: 4, src: imagem3,  marca: 'ford'},
        { id: 5, src: imagem4,  marca: 'honda'},
        { id: 6, src: imagem5,  marca: 'toyota'},
        { id: 7, src: imagem6,  marca: 'volkswagem'},
        { id: 8, src: imagem7,  marca: 'fiat'},
        { id: 9, src: imagem8,  marca: 'nissan'},
        { id: 10, src: imagem9,  marca: 'ram'},
        { id: 11, src: imagem10,  marca: 'mercedes'},
        { id: 12, src: imagem11,  marca: 'hyundai'},
    ]

    const imagemBanner = [
        { id: 1, src: banner },
        { id: 2, src: banner1 },
        { id: 2, src: banner2 }
    ]

    const imagemCategoria = [
        { id: 1, src: categ, titulo: 'Sedan' },
        { id: 2, src: categ1, titulo: 'Eletrico' },
        { id: 3, src: categ2, titulo: 'Picape' },
        { id: 4, src: categ3, titulo: 'Suv' },
        { id: 5, src: categ4, titulo: 'Hatch' }
    ]

    interface myCarObject {
        id: string,
        nome: string,
        marca: string,
        ano: number,
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

    const responsivoBanner1 = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4,
            slidesToSlide: 4  // opcional, padrão 1. 
        },
        desktop2: {
            breakpoint: { max: 1440, min: 1095 },
            items: 4,
            slidesToSlide: 4  // opcional, padrão 1. 
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

    const navigate = useNavigate()

    const redirecionar = (valor:string) =>{
        navigate('/marcas')
        console.log(valor)
        localStorage.setItem('marca', valor)

    }

    return (
        <Grid2 sx={{backgroundColor: '#ECEDF2'}}>
            <Carousel
                responsive={responsivoBanner}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={3000}
                keyBoardControl={true}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px">
                {imagemBanner.map((imagem) => (
                    <img key={imagem.id} src={imagem.src} height='100%' width='100%' style={{ marginTop: 30 }} />
                ))}
            </Carousel>
            <Container >
                <AppBarComponent />
                    <Box sx={{ mt: 5 }}>
                        <Typography variant="h5" color="#696969" sx={{ mb: 5 }}>Marcas</Typography>
                        <Carousel
                            arrows={false}
                            responsive={responsivo}
                            infinite={true}
                            autoPlay={true}
                            autoPlaySpeed={3000}
                            keyBoardControl={true}
                            dotListClass="custom-dot-list-style"
                            itemClass="carousel-item-padding-40-px">
                            {imagemLogo.map((imagem) => (
                                <Avatar key={imagem.id} src={imagem.src}  onClick={() => redirecionar(imagem.marca)} sx={{ width: 150, height: 150, gap: 2, border: '1px solid', cursor: 'pointer' }}></Avatar>
                            ))}
                        </Carousel>
                    </Box>
                    <Box sx={{ mt: 5 }}>
                        <Typography variant="h5" color="#696969">Categorias</Typography>
                        <Carousel
                            responsive={responsivoBanner1}
                            infinite={true}
                            autoPlay={false}
                            autoPlaySpeed={3000}
                            keyBoardControl={true}
                            dotListClass="custom-dot-list-style">
                            {imagemCategoria.map((imagem) => (
                                <Box key={imagem.id} position="relative" width="100%" sx={{ height: 200, mt: 5 }}>
                                    <img key={imagem.id} src={imagem.src} width="95%" height='100%' style={{ borderRadius: 5, cursor: 'pointer' }} onClick={() => navigate('/categorias')} />
                                    <Typography
                                        variant="h4"
                                        sx={{
                                            position: "absolute",
                                            top: "5%",
                                            left: "50%",
                                            transform: "translateX(-50%)",
                                            fontWeight: 600,
                                            border: '1px solid',
                                            color: "white",
                                            padding: "8px 12px",
                                            borderRadius: "4px",
                                            textAlign: "center",
                                        }}
                                    >
                                        {imagem.titulo}
                                    </Typography>
                                </Box>
                            ))}
                        </Carousel>
                    </Box>
                    <Typography variant="h5" sx={{ mt: 10 }} color="#696969">Carros a venda</Typography>
                    <Box sx={{ display: 'flex', gap: 1, mt: 2, flexWrap: 'wrap' }}>
                        {sellCar.map((car) => (
                            <Card key={car.id} sx={{ maxWidth: 280, width: '100%', border: '1px solid', mt: 2 }}>
                                <CardMedia sx={{ height: 140 }} image={teste} />
                                <CardContent>
                                    <Typography variant="h4" sx={{ fontWeight: 'bold' }}>{car.nome}</Typography>
                                    <Box sx={{ display: 'flex', gap: 1 }}>
                                        <Typography variant="h6" color="#696969">{car.motor}</Typography>
                                        <Typography variant="h6" color="#696969">{car.modelo}</Typography>
                                        <Typography variant="h6" color="#696969">{car.combustivel}</Typography>
                                    </Box>
                                    <Typography variant="h6" sx={{ mt: 3, fontWeight: 'bold' }}>R$ {car.preço}</Typography>
                                    <Typography variant="h6" color="#696969">{car.ano}</Typography>
                                    <Typography variant="h6" color="#696969">{car.quilometragem} km</Typography>
                                    <Button variant="contained" sx={{ backgroundColor: '#3b06b6', color: "fff", width: '100%' }}>Detalhes</Button>
                                </CardContent>
                            </Card>
                        ))}
                    </Box>
            </Container>
            <Grid2 size={{ xs: 12, md: 12, lg: 12 }} sx={{ backgroundColor: '#3b06b6', height: 200, width: '100vw', mt: 2 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mt: 5 }}>
                    <SportsMotorsportsIcon sx={{ color: '#fff' }} fontSize="large" />
                    <Typography variant="h4" color="#fff">
                        AutoMotoShop
                    </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mt: 2 }}>
                    <InstagramIcon sx={{ color: '#fff' }} fontSize="large" />
                    <FacebookIcon sx={{ color: '#fff' }} fontSize="large" />
                    <LinkedInIcon sx={{ color: '#fff' }} fontSize="large" />
                </Box>
            </Grid2>
        </Grid2>
    )
}

export default Home