import React, {useState} from 'react'

import './itemCount.css'

export function ItemCount() {

     // Parametros iniciales
     //definimmos el estock maximo y el estado inicial del inventario
   
    const stockMaximo = 20
    const stockInicial = 1

   
    
    // Estados del componente, creamos los componentes
    const [cantidadInicial, setCantidadInicial] = useState(stockInicial)
    const [cantidadMaxima, setCantidadMaxima] = useState(stockMaximo)
    const [carrito, setCarrito] = useState(0)
    
   
    
    // Handlers o callbacks
    // vamos a tener 2 callbacks
    
    //se va a encargar de agregar o seleccionar los items
    const handleClick = (cantidad) => {
        return () => {

            //la funcionalidad de los 3 items de abajo es cada vez que hago click calculo la cantidad controlo que esa cantidad no sea negativa y controlamos que no exceda el stock y actualizao el valor que calcule en setContador.
            const total = (cantidad < 0) ? 0 : cantidad // si la cantidad es negativa osea por debajo de 0 devolveme 0 en caso contrario devolveme la cantidad (para controlar que no tenga menores que cero)
            const limite = (cantidadMaxima < total) ? cantidadMaxima: total //controlamos el stock disponible:  si la cantidadItems es menor que la cantida todal entonces devolveme cantidadItems de caso  contrario devolveme total.
            
            setCantidadInicial(limite)//seteamos el setCantidadInicial con el limite
           
        }
    }

    //se va a encargar de agregar todos los items que elegi para el carrito
    //el siguiente callback va a administrar cada vez que le doy agregar y me lo suba al carrito.
    
    const handleAdd = () => {
        if (cantidadMaxima > 0) { // si cantidadItems es mayor a 0 osea si hay items disponible entonces hacer
            const resto = cantidadMaxima - cantidadInicial //primero calculamos el resto, me va a dar el margen cuanto me queda
            setCarrito(cantidadInicial + carrito)//actualizamos cantidad inicial, lo que tengo ahora + lo que tenia en el carrito
            setCantidadMaxima(resto) //actualizamos la cantidadMaxima como saque items tengo un vvalor menor.
            setCantidadInicial( (stockInicial > resto) ? resto : stockInicial ) //esto es para controlar que el valor inicial no sea mayor que la cantidad maxima que tengo en el inventario.
        } else {
            alert('no hay mas stock')
        }
    }
    
  

    
    let sumar = cantidadInicial + 1;
    let restar = cantidadInicial - 1;
  


    return (

        <div>
            <div className='info'>
                <h3>Items Disponibles: {cantidadMaxima}</h3>
                <h3>Stock Inicial: {stockInicial}</h3>
                <h3>Carrito:  {carrito}</h3>
            </div>
            <div className='itemCounter'>
                <div className="upper">
                    <button   className='buttom'onClick={handleClick(restar)} >-</button>
                    <button className='display'>{cantidadInicial}</button>
                    <button  className='buttom' onClick={handleClick(sumar)} >+</button>
                       
                </div>
                <div className="lower">
                    <button className='add' onClick={handleAdd}>Agregar</button>
                </div>
            </div>
            


        </div>

    )
}

