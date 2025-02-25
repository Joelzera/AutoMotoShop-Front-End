import { Box, Button, Card, CardContent, CardMedia, Container, Grid2, Typography } from "@mui/material"
import AppBarComponent from "../components/AppBarComponent"
import axios from "axios"
import { useEffect, useState } from "react"
import teste from '../../img/melhor-capa-para-carro.jpg'
import ButtonMenu from "../components/ButtonMenu"



const Buy = () => {

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


    return(
        <>
        <AppBarComponent/>
        <Container>
            <Grid2 size={{ xs: 12, md: 12, lg: 12 }}>
            <ButtonMenu/>
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
            </Grid2>
        </Container>
        </>
    )
}

export default Buy