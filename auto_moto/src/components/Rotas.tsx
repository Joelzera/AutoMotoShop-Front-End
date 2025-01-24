import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';


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