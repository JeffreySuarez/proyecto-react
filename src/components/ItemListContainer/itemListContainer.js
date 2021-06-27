import React from 'react'

import { ItemCount } from '../ItemCount/itemCount'
import { ItemsList } from '../itemList/itemList'
import './itemListContainer.css'


export const ItemListContainer = ({greeting}) => {
  

    return(
        
        <div>
       
          <p>{greeting}</p>   

            
             
        <ItemCount/>
    
        <ItemsList/>
         
        </div>
    )
}