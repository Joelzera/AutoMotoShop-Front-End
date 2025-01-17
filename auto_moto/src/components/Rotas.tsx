import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './home';


const rotas = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Home />} />
            </Routes>
        </Router>

    )
}

export default rotas