

import React, { useEffect, useState } from 'react'
import { ItemDetail } from '../ItemDetail/itemDetail'

export const ItemDetailContainer = () => {

    const [item, setItem] = useState([])

    useEffect(() => {

        const getItem = () => {

            

            return  [{
                    id: '1',
                    title: 'Casual',
                    description: 'Ropa casual',
                    price: '$6.500',
                    
            }]
            
        }

        
            const item = getItem()
            setItem(item)
       
        
    }, [])

    return (
        <div>
            <ItemDetail key={item} />
        </div>
    )


}