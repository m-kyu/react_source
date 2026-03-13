import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom'

import './App.css';
import ProductList from './pages/ProductList';
import ProductView from './pages/ProductView';

//css ( index.css )
//data (product.json)
//pages (Product.js,  productView.js)



function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<ProductList/>}/>
        <Route path='/view/:id' element={<ProductView />}/>
      </Routes>
    </Router>
  );
}

export default App;
