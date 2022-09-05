import './App.css';
import Footer from './Componentes/Footer';
import Header from './Componentes/Header';
import Item from './Componentes/ItemList';
import ItemCount from './Componentes/ItemCount';
import Navvar from './Componentes/NavBar';
import ItemListContainer from './Componentes/ItemListContainer';

function App() {
  return (
  <div className='container-fluid'>
    <Header />
    <Navvar />
      <h1>HOLA MUNDO</h1>
      <h2> Esto es un H2 01</h2>
      <ItemListContainer />
    <Footer />
  </div>
  );
}

export default App;
