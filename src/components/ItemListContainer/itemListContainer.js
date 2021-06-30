import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router'

import { ItemCount } from '../ItemCount/itemCount'
import { ItemList } from '../itemList/itemList'

import './itemListContainer.css'



export const ItemListContainer = ({greeting}) => {

    const {id} = useParams()


    const [listado, setListado] = useState([]);
    console.log(id)


    const prod = [{
        id: '1',
        title: 'Casual',
        description: 'Ropa casual',
        price: '$6.500',
        pictureUrl: 'https://image.freepik.com/foto-gratis/conjunto-ropa-mujer-moda-camisa-jeans-bolso-look-moda-hipster-endecha-plana_169016-3209.jpg',
        categoryId: 'Mujer'
    },{
        id: '2',
        title: 'Camisetas',
        description: 'Combo de camisetas',
        price: '$1.500',
        pictureUrl: 'https://image.freepik.com/foto-gratis/pila-camisa-hombres_1203-2615.jpg',
        categoryId: 'Hombre'
    },{
        id: '3',
        title: 'Conjunto completo',
        description: 'Para toda ocacion',
        price: '$3.400',
        pictureUrl: 'https://image.freepik.com/foto-gratis/clasico-hombres-casual-trajes-accesorios-mesa_1357-162.jpg',
        categoryId: 'Infantil'
    }]



    useEffect(() => {
        
        const nuevaPromesa = new Promise((res)=>{
            setTimeout(() =>{
                res(prod)
            },2000)
        })
        .then((res) => {
            setListado(res)
            console.log(res)
        })
    },[id]) 

   

    return(
        
        <div>
       
            <p>{greeting}</p>     
             
            <ItemCount/>

            <ItemList items={listado}/>
       

         
        </div>
    )
}