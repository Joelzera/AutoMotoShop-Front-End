import { alpha, AppBar, Box, Button, Grid2, InputBase, styled, Toolbar, Typography } from "@mui/material"
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
import banner from '../../img/honda-civic-banner-1.png'
import banner2 from '../../img/Corolla_Hatch_Performance_Hero_Banner_D_1920x1080.webp'
import banner3 from '../../img/virtus.jpg'
import banner4 from '../../img/byd.jpg'


const Home = () => {

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
                                placeholder="Search…"
                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </Search>
                        <Button color="inherit">Comprar</Button>
                        <Button color="inherit">Vender</Button>
                        <Button color="inherit">Entrar</Button>
                    </Toolbar>
                </AppBar>

                <Grid2 size={{ xs: 12, md: 12}} >
                    <Typography>banner</Typography>
                    <Carousel responsive={responsivoBanner}
                        infinite={true}
                        autoPlay={true}
                        autoPlaySpeed={3000}
                        keyBoardControl={true}
                        dotListClass="custom-dot-list-style"
                        itemClass="carousel-item-padding-40-px">
                        <img src={banner} width='100%' style={{ display: 'block'}} />
                        <img src={banner2} />
                        <img src={banner3} />
                        <img src={banner4} />
                    </Carousel>
                </Grid2>
                <Grid2 size={{ xs: 12, md: 12}} sx={{ marginLeft: 20, marginRight: 20 }}>
                    <Typography variant="h4">Marcas</Typography>
                    <Carousel responsive={responsivo}
                        infinite={true}
                        autoPlay={true}
                        autoPlaySpeed={3000}
                        keyBoardControl={true}
                        dotListClass="custom-dot-list-style"
                        itemClass="carousel-item-padding-40-px">
                        <img src={imagem} height='70%' width='95%' style={{ borderRadius: 20 }} />
                        <img src={imagem1} height='70%' width='95%' style={{ borderRadius: 20 }} />
                        <img src={imagem2} height='70%' width='95%' style={{ borderRadius: 20 }} />
                        <img src={imagem3} height='70%' width='95%' style={{ borderRadius: 20 }} />
                        <img src={imagem4} height='70%' width='95%' style={{ borderRadius: 20 }} />
                        <img src={imagem5} height='70%' width='95%' style={{ borderRadius: 20 }} />
                        <img src={imagem6} height='70%' width='95%' style={{ borderRadius: 20 }} />
                        <img src={imagem7} height='70%' width='95%' style={{ borderRadius: 20 }} />
                        <img src={imagem8} height='70%' width='95%' style={{ borderRadius: 20 }} />
                    </Carousel>
                    <Typography variant="h4">Carros a venda</Typography>
                </Grid2>
            </Grid2>
        </Box>

    )
}

export default Home