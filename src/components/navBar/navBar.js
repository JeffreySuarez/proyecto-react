
import './navBar.css'
import {Card} from '../CartWidget/cartWidget'


export const NavBar = (props) => {

    return(
        <nav className="navContainer">
            <ul>
                <li>Mujer</li>
                <li>Hombre</li>
                <li>Infantil</li>
                <li>Deportivo</li>
                <li>Calzado</li>
                <li>Accesorios</li>
                <li className="masVendido">Lo mas vendido</li>
                <li className="sale">SALE</li>
                <Card/>
                
            </ul>
           
        
          

        </nav>
    )
}