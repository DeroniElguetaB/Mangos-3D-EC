import './App.css';
import 'core-js/actual';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Inicio from './components/Pestañas/Inicio';
import Compania from './components/Pestañas/Compañia';
import Productos from './components/Pestañas/Productos';
import ProductosDetalle from './components/Pestañas/ProductosDetalle';
import Provider from './components/Context/Context';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';

function App() {
  return (
    <Provider>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Inicio/>}/>
          <Route exact path='/Compania' element={<Compania/>}/>
          <Route exact path='/Productos' element={<Productos/>}/>
          <Route exact path='/Categoria/:id' element={<Productos/>}/>
          <Route exact path='/Productos/item/:id' element={<ProductosDetalle/>}/>
          <Route exact path='/Cart' element={<Cart/>}/>
          <Route exact path='/Checkout' element={<Checkout/>} />
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App;
