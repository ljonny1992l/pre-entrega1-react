

import "./Header.css"
import logo from "../../assets/logo.png"
import { ShoppingCart } from "../ShoppingCart/ShoppingCart"

export const Header = () => {

    return (
        <header className="header">

            <div className="headerContainer">                

               <img src= {logo} className="logo" alt="imagen de un ojo" />
               
               <p className="nombreTienda">Electricidad-Fernandez</p>

                <nav className="navbar">
                    <a href="#" className="navbarLink">Inicio</a>
                    <a href="#" className="navbarLink">Artefacto iluminaria</a>
                    <a href="#" className="navbarLink">artefacto para consturccion</a>                                   
                </nav>

                <ShoppingCart/>                

                
            </div>
        </header>
    )
}