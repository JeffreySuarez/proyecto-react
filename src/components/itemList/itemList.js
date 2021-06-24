import React, { useState } from 'react';
import {Item} from '../items/items'


export const ItemsList = () =>{
  

    const [listado, setListado] = useState([{
        id: 1,
        title: 'Casual',
        description: 'Ropa casual',
        price: 6500,
        pictureUrl: 'https://image.freepik.com/foto-gratis/conjunto-ropa-mujer-moda-camisa-jeans-bolso-look-moda-hipster-endecha-plana_169016-3209.jpg'
    },{
        id: 2,
        title: 'Camisetas',
        description: 'Combo de camisetas',
        price: 1500,
        pictureUrl: 'https://image.freepik.com/foto-gratis/pila-camisa-hombres_1203-2615.jpg'
    },{
        id: 3,
        title: 'Conjunto completo',
        description: 'Para toda ocacion',
        price: 3400,
        pictureUrl: 'https://image.freepik.com/foto-gratis/clasico-hombres-casual-trajes-accesorios-mesa_1357-162.jpg'
    }]
    )

    // const Productos1 = new Promise((resolve, reject) => {
        
    //     setTimeout(() => {
    //         resolve(
    //             {listado.map((lista) => {
    //                 return(
    //                     <div > 
    //                         <Item id={lista.id} title={lista.title} price={lista.price} pictureUrl={lista.pictureUrl} />
    //                     </div>
    //                 )
    //             }
    //             )
    //         }
    //        )
    //     }, 5000)
    //   })
      
    //   Productos1.then((product) => {
    //     console.log(`Productos:  ${product}`)
      
    //   })
      




  return(
        <div>
            <h1> la lista de productos</h1>
            <div>
                {listado.map((lista) => {
                    return(
                        <div >
                
                        <Item id={lista.id} title={lista.title} price={lista.price} pictureUrl={lista.pictureUrl} />
                        </div>
                     )
                })}

                <h2>productos</h2>
                <h1></h1>
            </div>
           
        </div>

  )
    }
