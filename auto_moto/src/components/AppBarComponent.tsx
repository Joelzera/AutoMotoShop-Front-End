import { alpha, AppBar, Box, Button, InputBase, styled, Toolbar, Typography } from "@mui/material";
import SportsMotorsportsIcon from '@mui/icons-material/SportsMotorsports';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from "react";
import { useNavigate } from "react-router-dom";


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


const AppBarComponent = () => {


    const [search, setSearch] = useState('')
    const navigate = useNavigate()

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(search)
        if (!search) {
            return
        }
        localStorage.setItem('search', search)
        navigate('/search')
        setTimeout(() => {
            window.location.reload()
        }, 500)
    }

    return (

        <AppBar position="fixed"
            sx={{
                color: "#1a1a1a",
                backgroundColor: 'white',
                boxShadow: 'none',
            }}>
            <Toolbar>
                <SportsMotorsportsIcon sx={{ padding: 1, color: '#3b06b6' }} fontSize="large" />
                <Typography variant="h6" fontWeight={800} flexGrow={0.4}>
                    AutoMotoShop
                </Typography>
                <form onSubmit={handleSubmit} style={{width: 400}}>
                    <Search sx={{ border: '2px solid #B0B0B0', borderRadius: '4px', flexGrow: 0.2 }}>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder='Procurar'
                            onChange={(e) => setSearch(e.target.value)}
                            value={search}
                        />
                    </Search>
                </form>
                <Box sx={{ flexGrow: 0.5 }}>
                    <Button sx={{ marginLeft: 1, fontFamily: 'cursive', color: '#a0a0a0', fontWeight: 700 }} onClick={() => navigate('/comprar')} >Comprar</Button>
                    <Button sx={{ marginLeft: 1, fontFamily: 'cursive', color: '#a0a0a0', fontWeight: 700 }} onClick={() => navigate('/vender')}>Vender</Button>
                </Box>
                <Button variant="contained" size="small" sx={{ backgroundColor: '#3b06b6', color: "fff", fontFamily: 'cursive' }}  onClick={() => navigate('/login')}>Entrar</Button>
            </Toolbar>
        </AppBar>
    )
}

export default AppBarComponent