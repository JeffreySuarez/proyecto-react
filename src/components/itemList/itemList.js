import React from 'react';
import {Item} from '../item/item'


export const ItemList = ({items}) => {
  
   console.log(items)

  return(

    <div>
       {items.map (item =>  <Item item={item}/> )}
    </div>
      
  )
}