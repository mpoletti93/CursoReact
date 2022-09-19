import NavBar from "./Componentes/NavBar.jsx";
import Main from "./Componentes/Main";
import Footer from "./Componentes/Footer";
import { BrowserRouter } from "react-router-dom";
import Provider from "./Componentes/CartContext";

function App () {
    return (
            <BrowserRouter>
                <NavBar/>
                <Main greeting="TuVinito" />
                <Footer/>
            </BrowserRouter>
    )
}

export default App