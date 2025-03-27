import { Box, Button, Card, CardContent, CardMedia, Container, Grid2, Typography } from "@mui/material"
import AppBarComponent from "../components/AppBarComponent"
import { useEffect, useState } from "react"
import axios from "axios"
import teste from '../../img/TesteCapa.jpg'
import ButtonMenu from "../components/ButtonMenu"

const Search = () =>{

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
    const [cars , setCars] = useState<myCarObject[]>([])
    
    const searchCar = localStorage.getItem('search')
    const searchCarlower = searchCar?.toLowerCase()

    useEffect(() =>{
        
        const getCarName = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/car/${searchCarlower}`)
                console.log(response.data)
                setCars(response.data)
            } catch (error) {
                console.log(error, ' deu erro')
            }
        }
        getCarName()
    },[])

    
    
    return(
        <>
        <AppBarComponent/>
        <Container>
        <Grid2 size={{ xs: 12, md: 12, lg: 12 }}>          
            <ButtonMenu/>
            <Box sx={{ mt: 5, display: 'flex', flexWrap: 'wrap', gap: 2}}>               
                {cars.map((car) =>(
                    <Card key={car.id} sx={{ maxWidth: 270, width: '100%', border: '1px solid', mt: 2 }}>
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

export default Search