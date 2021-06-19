import React from 'react'
import './cartWidget.css'
import Carshop from '../image/carshop.png'

export const Card = () => {
    return(  
        <div className="card">
            <img src={Carshop} className="logo" alt="logo" />
        </div>    
    )
}