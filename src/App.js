import './App.css';
import Footer from './Componentes/Footer';
import Header from './Componentes/Header';
import Navvar from './Componentes/NavBar';

function App() {
  return (
  <div className='container-fluid'>
    <Header />
    <Navvar />
      <h1>HOLA MUNDO</h1>
      <h2> Esto es un H2 01</h2>
    <Footer />
  </div>
  );
}

export default App;
