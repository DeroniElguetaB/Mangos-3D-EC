import './App.css';
import 'core-js/actual';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Inicio from './components/Pestañas.jsx/Inicio';
import Compania from './components/Pestañas.jsx/Compañia';
import Productos from './components/Pestañas.jsx/Productos';
import ProductosDetalle from './components/Pestañas.jsx/ProductosDetalle';
import Provider from './components/Context/Context';
import Cart from './components/Cart/Cart';

function App() {
  return (
    <Provider>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Inicio/>}/>
          <Route exact path='/Compania' element={<Compania/>}/>
          <Route exact path='/Productos' element={<Productos/>}/>
          <Route exact path='/Productos/category/:genero' element={<Productos/>}/>
          <Route exact path='/Productos/item/:id' element={<ProductosDetalle/>}/>
          <Route exact path='/Cart' element={<Cart/>}/>
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App;
