import { Box, Button, Card, CardContent, Container, Grid2, Typography } from "@mui/material"
import AppBarComponent from "../components/AppBarComponent"
import { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Search = () =>{

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
    const [cars , setCars] = useState<myCarObject[]>([])
    const navigate = useNavigate()
    
    const searchCar = localStorage.getItem('search')

    useEffect(() =>{
        
        const getCarName = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/car/${searchCar}`)
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
           
            <Box sx={{ mt: 10}}>
            <Button variant="contained" onClick={() => navigate('/')} startIcon={<ArrowBackIcon/>}  sx={{ backgroundColor: '#3b06b6', color: "fff" }}>Voltar</Button>
                <Typography variant='h4'>Resultados para: {searchCar}</Typography>
                {cars.map((car) =>(
                    <Card key={car.id} sx={{ maxWidth: 280, width: '100%', border: '1px solid', mt: 2 }}>
                  
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