  
import React from 'react'



export function Add(props) {

    const add = {
        display: 'flex',
        justifyContent: 'center',
        cursor: 'pointer',
        backgroundColor: 'red',
        padding: 20,
        border: '2px solid brown',
        color: 'white',
        height: 10,
        borderRadius: 10
    }

    return (
        <div className='agregar' style={add} onClick={props.onAdd}>Agregar</div>
    )
}