import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom" ;
import Footer from './Componentes/Footer';
import Header from './Componentes/Header';
import Item from './Componentes/ItemList';
import ItemCount from './Componentes/ItemCount';
import Navvar from './Componentes/NavBar';
import ItemListContainer from './Componentes/ItemListContainer';
import ItemDetailContainer from './Componentes/ItemDetailContainer';


function App() {
  return (
  <div className='container-fluid'>
    <Header />
    <Navvar />
      <h1>HOLA MUNDO</h1>
      <h2> Esto es un H2 01</h2>
      <ItemListContainer />
      <ItemDetailContainer />
    <Footer />
  </div>
  );
}

export default App;
