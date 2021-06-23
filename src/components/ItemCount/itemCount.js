import React from 'react'

import { Add } from './Add/Add'
import { Button } from './Button/button'
import { Display } from './Display/display'

export function ItemCount(props) {
    const styles = {
        width: 350,
        height: 160,
        backgroundColor: 'rgb(218, 223, 232)',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: '20px',
        margin: '50px auto'
    }

    const upper = {
        display: 'flex',
        justifyContent: 'space-around',
        width: '100%',
        height: '40%',
        margin: '20px 0 0'
    }

    const lower = {
        display: 'flex',
        justifyContent: 'space-around',
        width: '100%',
        margin: '10px 0 20px 0'
    }

    return (
        <div className='itemCounter' style = {styles}>
            <div className='upper' style = {upper}>
                <Button add={false} handleClick = {props.handleClick} counter = {props.counter} /> {/* Boton restar */}
                <Display counter = {props.counter} export = {props.exceed} />
                <Button add={true} handleClick = {props.handleClick} counter = {props.counter} /> {/* Boton sumar */}
            </div>
            <div className='lower' style = {lower}>
                <Add onAdd = {props.handleAdd} /> {/* Boton agregar */}
            </div>
        </div>
    )
}