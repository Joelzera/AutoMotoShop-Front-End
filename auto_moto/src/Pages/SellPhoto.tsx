import { AppBar, Avatar, AvatarGroup, Box, Button, Card, CardContent, CardMedia, Container, Grid2, styled, Toolbar, Typography } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SportsMotorsportsIcon from '@mui/icons-material/SportsMotorsports';
import { useNavigate } from "react-router-dom";
import AddBoxIcon from '@mui/icons-material/AddBox';
import React, { useState } from "react";



const SellPhoto = () => {

    const navigate = useNavigate()
    const VisuallyHiddenInput = styled('input')({
        clip: 'rect(0 0 0 0)',
        clipPath: 'inset(50%)',
        height: 1,
        overflow: 'hidden',
        position: 'absolute',
        bottom: 0,
        left: 0,
        whiteSpace: 'nowrap',
        width: 1,
    });

    const [photo, setPhoto] = useState<File[]>([])

    const handleChangePhoto = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        if (e.target.files != null) {
            setPhoto([...photo, ...Array.from(e.target.files)]);
        }
        console.log(photo)
    }

    return (
        <Grid2 sx={{ backgroundColor: '#ECEDF2', height: '100vh' }}>
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
                        onClick={() => navigate('/')}
                        startIcon={<ArrowBackIcon />}
                        sx={{ backgroundColor: '#3b06b6', color: "fff" }}>Menu</Button>
                    <Button variant="contained"
                        onClick={() => navigate('/login')}
                        sx={{ backgroundColor: '#3b06b6', color: "fff", marginLeft: 1 }}>Entrar</Button>
                </Toolbar>
            </AppBar>
            <Container>
                <Grid2 container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Box mt={10} >
                        <AvatarGroup max={4}>
                            {photo.map((img, index) => (
                                <Avatar key={index} sx={{ width: 600, height: 400 }} variant="square" src={URL.createObjectURL(img)} />
                            ))}
                        </AvatarGroup>
                        <Button
                            component="label"
                            role={undefined}
                            variant="outlined"
                            tabIndex={-1}
                            startIcon={<AddBoxIcon />}
                            sx={{ borderColor: '#3b06b6', color: '#3b06b6' }}
                        >
                            Adicionar fotos
                            <VisuallyHiddenInput
                                type="file"
                                onChange={handleChangePhoto}
                                multiple
                            />
                        </Button>
                        <Button variant="outlined"
                        onClick={() => navigate('/vender')}
                        sx={{ borderColor: '#3b06b6', color: '#3b06b6', marginLeft: 1 }}>Continuar</Button>
                    </Box>
                </Grid2>
            </Container>
        </Grid2>
    )
}

export default SellPhoto;