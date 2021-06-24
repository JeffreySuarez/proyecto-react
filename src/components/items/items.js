import React from 'react'
import './items.css'
export const Item = (props) => {
    return (
        <div className='producto'>
            <li><h2>{props.id}</h2></li>
            <li><h1>{props.title}</h1></li>
            <li><h2>{props.price}</h2></li>
            <li><img src={props.pictureUrl}alt="" /></li>
            
        </div>
    )
}