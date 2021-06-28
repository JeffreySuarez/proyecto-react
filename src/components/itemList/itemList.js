import React from 'react';
import {Productos} from '../item/item'


export const ItemList = ({items}) => {
  
   console.log(items)

  return(

    <div>
      {items.map(item => <Productos item={item}/>)}

 
       
    </div>
      
  )
}