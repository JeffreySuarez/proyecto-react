
import './navBar.css'
import {Card} from '../CartWidget/cartWidget'
import { Link, NavLink } from 'react-router-dom'


export const NavBar = (props) => {

    return(
        <nav className="navContainer">
            <Link to = '/'>
                <p className="logo"> MAFRA </p>
            </Link>
            <ul className="categories">
                <NavLink to = 'category/:Mujer'>
                    <li className="category">Mujer</li>
                </NavLink>
                <NavLink to = 'category/:Hombre'>
                    <li className="category">Hombre</li>
                </NavLink>
                <NavLink to = 'category/:Infantil'>
                    <li className="category">Infantil</li>
                </NavLink>
                <NavLink to = 'category/:Deportivo'>
                    <li className="category">Deportivo</li>
                </NavLink>
                <NavLink to = 'category/:Calzado'>
                    <li className="category">Calzado</li>
                </NavLink>
                <NavLink to = 'category/:Accesorios'>
                    <li className="category">Accesorios</li>
                </NavLink>
                <NavLink to = 'category/:Lo mas vendido'>
                    <li className="masVendido, category">Lo mas vendido</li>
                </NavLink>
                <NavLink to = 'category/:SALE'>
                    <li className="sale, category">SALE</li>
                </NavLink>
                
                <Card/>
            </ul>

        </nav>
    )
}