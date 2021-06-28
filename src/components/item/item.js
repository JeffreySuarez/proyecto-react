import React from 'react'
import './item.css'

export const Item = ({item}) => {

        console.log(item)
 
    return(
        
        
        <div>
            <p>Id: <span> {item.id} </span></p>
            <h3>Titulo: {item.title} </h3>
            <p>Descripcion: <span>  </span></p>
            <p>Precio: <span>  </span></p>
        </div>
    )
}