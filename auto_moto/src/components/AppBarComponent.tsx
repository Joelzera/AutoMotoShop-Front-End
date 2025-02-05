import { alpha, AppBar, Box, Button, InputBase, styled, Toolbar, Typography } from "@mui/material";
import SportsMotorsportsIcon from '@mui/icons-material/SportsMotorsports';
import SearchIcon from '@mui/icons-material/Search';




const AppBarComponent = () => {


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

        <AppBar position="fixed"
            sx={{
                color: "#1a1a1a",
                backgroundColor: 'white',
                boxShadow: 'none',
            }}>
            <Toolbar >
                <SportsMotorsportsIcon sx={{ padding: 1, color: '#3b06b6' }} fontSize="large" />
                <Typography variant="h6" flexGrow={0.4}>
                    AutoMotoShop
                </Typography>
                <Search sx={{ border: '2px solid #B0B0B0', borderRadius: '4px', flexGrow: 0.2}}>
                    <SearchIconWrapper>
                        <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                        placeholder="Procurar"
                        inputProps={{ 'aria-label': 'search' }}
                    />
                </Search>
                <Box sx={{flexGrow: 0.5}}>
                <Button color="inherit" sx={{ marginLeft: 1 }} >Comprar</Button>
                <Button color="inherit" sx={{ marginLeft: 1}}>Vender</Button>
                </Box>
                <Button variant="contained" sx={{ backgroundColor: '#3b06b6', color: "fff"}}>Entrar</Button>
            </Toolbar>
        </AppBar>
    )
}

export default AppBarComponent