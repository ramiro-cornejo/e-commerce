/*
import logo from './logo.svg';
import './App.css';
*/
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { NavBar } from "./components/NavBar/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/styles.scss';
import { Nosotros } from './components/Nosotros/Nosotros';
import { Contacto } from './components/Contacto/Contacto';
import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom'
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import {CartContext} from './context/CartContext'
import { useState } from "react";



function App() {

  const [cart, setCart] = useState([])

  const agregarAlCarrito = (item) => {
    setCart([...cart, item])
  }

  const isInCart = (id) => {
    return cart.some((prod) => prod.id === id)
  }

  const cantidadCart = () => {
    return cart.reduce((acc, prod) => acc + prod.cantidad, 0)
  }

  const totalCart = () => {
    return cart.reduce((acc, prod) => acc + prod.cantidad * prod.precio , 0)
  }

  return (
    
    <CartContext.Provider value={
        {
          cart,
          agregarAlCarrito,
          isInCart,
          cantidadCart,
          totalCart
        }
      }>

      <BrowserRouter>
        <NavBar/>

        <Routes>
          <Route path="/" element={<ItemListContainer/>} />
          <Route path="/Productos/:catId" element={<ItemListContainer/>} />
          <Route path="detail/:itemId" element={<ItemDetailContainer/>}/>
          <Route path="/Nosotros" element={<Nosotros/>} />
          <Route path="/Contacto" element={<Contacto/>} />
          
          <Route path='*' element={<Navigate to='/'/> }/>
          {/*<Route path='*' element={<Error404 to='/'/> }/>*/}
        </Routes>
        
      </BrowserRouter>

      </CartContext.Provider>
    
  );

}

/* 
//Primer ejemplo clase 01
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/

export default App;
