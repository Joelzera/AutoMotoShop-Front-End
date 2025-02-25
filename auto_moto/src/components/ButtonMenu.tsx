import { useNavigate } from "react-router-dom"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Button } from "@mui/material";

const ButtonMenu = () => {

    const navigate = useNavigate()

    return(
        <Button variant="contained" onClick={() => navigate('/')} startIcon={<ArrowBackIcon/>}  sx={{ backgroundColor: '#3b06b6', color: "fff" , mt:10}}>Menu</Button>
    )
}

export default ButtonMenu