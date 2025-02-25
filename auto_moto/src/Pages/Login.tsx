import { Box, Button, Card, CardContent, Container, Grid2, TextField, Typography } from "@mui/material"
import AppBarComponent from "../components/AppBarComponent"
import ButtonMenu from "../components/ButtonMenu";


const Login = () => {


    return(
        <>
        <AppBarComponent/>
        <Container>
            <Grid2 size={{ xs: 12, md: 12, lg: 12 }}>
                <ButtonMenu/>
                <Card sx={{ mt: 2, border: '1px solid', display: 'flex'}}>
                    <CardContent sx={{ width: '50%'}}>
                        <Box sx={{ display: 'flex', flexDirection: 'column'}}>
                        <Typography variant='h4'>Cadastrar-se</Typography>
                        <Typography variant="h6">
                            Digite seu nome, email e senha
                        </Typography>
                        <TextField label='nome' >Nome</TextField>
                        <TextField label='email'>Email</TextField>
                        <TextField label='senha'>Senha</TextField>
                        <Button variant="contained">Cadastrar</Button>
                        </Box>
                    </CardContent>
                    <CardContent sx={{ width: '50%'}}>
                        <Box sx={{ display: 'flex', flexDirection: 'column'}}>
                        <Typography variant='h4'>Entrar</Typography>
                        <Typography variant="h6">
                            Digite seu nome, email e senha
                        </Typography>
                        <TextField label='nome' >Nome</TextField>
                        <TextField label='email'>Email</TextField>
                        <TextField label='senha'>Senha</TextField>
                        <Button variant="contained">Entrar</Button>
                        </Box>
                    </CardContent>
                </Card>
            </Grid2>
        </Container>
        </>
    )
}

export default Login