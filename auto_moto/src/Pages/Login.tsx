import { Button, Container, Grid2 } from "@mui/material"
import AppBarComponent from "../components/AppBarComponent"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from "react-router-dom"


const Login = () => {

    const navigate = useNavigate()

    return(
        <>
        <AppBarComponent/>
        <Container>
            <Grid2 size={{ xs: 12, md: 12, lg: 12 }}>
                <Button variant="contained" onClick={() => navigate('/')} startIcon={<ArrowBackIcon/>}  sx={{ backgroundColor: '#3b06b6', color: "fff" , mt:10}}>Voltar</Button>
            </Grid2>
        </Container>
        </>
    )
}

export default Login