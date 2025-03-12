import { AppBar, Box, Button, Card, CardContent, CardMedia, Container, Grid2, Toolbar, Typography} from "@mui/material"
import ButtonMenu from "../components/ButtonMenu"
import axios from "axios"
import { useState } from "react"
import teste from '../../img/melhor-capa-para-carro.jpg'
import SportsMotorsportsIcon from '@mui/icons-material/SportsMotorsports';
import { useNavigate } from "react-router-dom"

const Brands = () => {


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

    const buscarMarca = async () =>{
        const marca = localStorage.getItem('marca')
        try {
            const response = await axios.get(`http://localhost:5000/car/marca/${marca}`)
            console.log(response.data[0])
            setSellCar(response.data)
        } catch (error) {
            console.log(error, 'erro ao buscar o carro pela marca')
        }
    }

    buscarMarca()

    return(
       <Grid2 sx={{backgroundColor: '#ECEDF2', height: '100vh', mt: -2}}>
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
                           <Button variant="contained" onClick={() => navigate('/login')}  sx={{ backgroundColor: '#3b06b6', color: "fff" }}>Entrar</Button>
                       </Toolbar>
                   </AppBar>
               <Container>
                 
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
                  
               </Container>
               </Grid2>
    )
}

export default Brands