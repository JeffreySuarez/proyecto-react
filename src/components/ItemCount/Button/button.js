
import React from 'react'

export function Button(props) {

    const button = {
        width: 50,
        height: 50,
        margin: 0,
        textAlign: 'center',
        border: '2px solid black',
        padding: 'auto',
        cursor: 'pointer',
        backgroundColor: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        fontSize: '2rem'
    }

    const sign = props.add ? '+' : '-'
    const amount = props.add ? (props.counter + 1) : (props.counter - 1)
    return (
        <div className='button' style={button} onClick={props.handleClick(amount)}>
            {sign}
        </div>
    )
}