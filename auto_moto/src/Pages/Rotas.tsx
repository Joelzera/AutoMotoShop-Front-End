import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Search from './Search';
import Buy from './Buy';
import Sell from './Sell';
import Login from './Login';
import Brands from './Brands';
import Category from './Category';
import Register from './Register';


const rotas = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/search' element={<Search />} />
                <Route path='/comprar' element={<Buy />} />
                <Route path='/vender' element={<Sell />} />
                <Route path='/login' element={<Login />} />
                <Route path='/cadastro' element={<Register/>} />
                <Route path='/marcas' element={<Brands />} />
                <Route path='/categorias' element={<Category />} />
            </Routes>
        </Router>

    )
}

export default rotas