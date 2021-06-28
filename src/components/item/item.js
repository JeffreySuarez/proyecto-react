import React from 'react'
import './item.css'

export const Productos = ({item}) => {

        console.log(item)
 
    return(
        
        
        <div className='catalogo'>
            <p>ID: {item.id}</p>
            <h2>Nombre: {item.title}</h2>
            <p>Descripcion: {item.description}</p>
            <p>Precio: {item.price}</p>
        </div>
    )
}