import React, {useState} from 'react'

import { ItemCount } from '../ItemCount/itemCount'


export const ItemListContainer = ({greeting}) => {
   // Parametros iniciales
   const available = 20
   const initial = 1

   // Estados
   const [counter, setCounter] = useState(initial)
   const [stock, setStock] = useState(available)
   const [cart, setCart] = useState(0)

   const [exceed, setExceed] = useState(false)

   // Handlers o callbacks

   const handleClick = (amount) => {
       return () => {
           const total = (amount < 1) ? 1 : amount // operador ternario
           const limit = (stock < total) ? stock: total // operador ternario

           setCounter(limit)
           setExceed(((stock -1) < total) || (total === 1)) //opcional
       }
   }

   const handleAdd = () => {
       if (stock > 0) { // si hay stock disponible
           const resto = stock - counter
           setCart(counter + cart)
           setStock(resto)
           setCounter( (initial > resto) ? resto : initial ) //opcional
       } else {
           alert('no hay mas stock')
       }
   }

   // Rendering

  //  const info = {
  //      width: '100%',
  //      marginTop:100,
  //      textAlign: 'center'
  //  }

    return(
        <div>
          <p>{greeting}</p>   

        <div className='app'>

          <div className='info'>
              <h3>Disponibles: {stock}</h3>
              <h3>Inicial: {initial}</h3>
              <h3>Carrito: {cart}</h3>
          </div>

          <ItemCount stock = {stock}
                    counter = {counter}
                    handleAdd = {handleAdd}
                    handleClick = {handleClick}
                    exceed = {exceed}
          />

      </div>
        
         
    </div>
    )
}