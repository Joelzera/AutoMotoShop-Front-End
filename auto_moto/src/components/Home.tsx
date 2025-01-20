import { alpha, AppBar, Box, Button, Grid2, InputBase, styled, Toolbar, Typography } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';
import SportsMotorsportsIcon from '@mui/icons-material/SportsMotorsports';

const Home = () => {



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
        <>
            <Grid2 container >
                <Box sx={{ flexGrow: 1, width: '100%' }}>
                    <AppBar position="static"
                        sx={{
                            color: "#1a1a1a",
                            backgroundColor: 'white',
                            boxShadow: 'none', 
                            borderBottom: '1px solid #B0B0B0',

                        }}>
                        <Toolbar>
                            <SportsMotorsportsIcon sx={{ padding: 1, color: '#3b06b6' }} />
                            <Typography variant="h6" component="div" sx={{ flexGrow: 0.5 }}>
                                Auto Moto Shop
                            </Typography>
                            <Search sx={{ border: '1px solid #B0B0B0', borderRadius: '4px' }}>
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
                </Box>
            </Grid2>
        </>
    )
}

export default Home