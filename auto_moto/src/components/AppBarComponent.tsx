import { alpha, AppBar,  Box,  Button,  InputBase,  styled,  Toolbar, Typography } from "@mui/material";
import SportsMotorsportsIcon from '@mui/icons-material/SportsMotorsports';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from "react-router-dom";
import { useState } from "react";

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
    height: '100%',
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
                <Typography variant="h6" fontWeight={800} flexGrow={0.5}>
                    AutoMotoShop
                </Typography>
                <Box flexGrow={0.5}>
                <Button variant="text" size="small" color="inherit" sx={{ padding: 1}} onClick={() => navigate('/comprar')}>Comprar</Button>
                <Button variant="text" size="small" color="inherit" sx={{ padding: 1}} onClick={() => navigate('/vender')}>Vender</Button>
                </Box>
                <form onSubmit={handleSubmit} style={{ width: 275, marginRight: 5}}>
                                <Search sx={{ border: '1px solid', borderRadius: '4px', height: 30 }}>
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
                <Button variant="contained" size="small" sx={{ backgroundColor: '#3b06b6', color: "fff", fontFamily: 'cursive' }}  onClick={() => navigate('/login')}>Entrar</Button>
            </Toolbar>
        </AppBar>
    )
}

export default AppBarComponent