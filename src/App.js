import './App.css';
import {Routes, Route} from "react-router-dom" ;
import Footer from './Componentes/Footer';
import Header from './Componentes/Header';
import Item from './Componentes/ItemList';
import ItemCount from './Componentes/ItemCount';
import Navvar from './Componentes/NavBar';
import ItemListContainer from './Componentes/ItemListContainer';
import ItemDetailContainer from './Componentes/ItemDetailContainer';
import Cart from './Componentes/Cart';


function App() {
  return (
  <div className='container-fluid'>
    <Header />
    <Navvar />
    <Routes>
            <Route path="/" element={<ItemListContainer/>}/>
            <Route path="/categoria/:categoria" element={<ItemListContainer/>}/>
            <Route  path="/item/:slug" element={<ItemDetailContainer/>}/>
      </Routes>
    <Footer />
  </div>
  );
}

export default App;
