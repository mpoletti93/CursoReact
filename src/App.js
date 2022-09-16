import NavBar from "./Componentes/NavBar.jsx";
import ItemListContainer from "./Componentes/ItemListContainer";
import Main from "./Componentes/Main";
import Footer from "./Componentes/Footer";
import { BrowserRouter } from "react-router-dom";

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