import React from 'react'
import './item.css'
import {Link} from 'react-router-dom'
export const Productos = ({item}) => {

        console.log(item)
 
    return(
        
        <Link to={`/item/${item.id}`}>
            <div className='catalogo' id={item.id}>
                <p>ID: {item.id}</p>
                <h2>Nombre: {item.title}</h2>
                <p>Descripcion: {item.description}</p>
                <p>Precio: {item.price}</p>
            </div>
        </Link>
    )
}