import React, {useState} from 'react'
import Contexts from '../Context/Items'

export default function CartContext({children}) {
  
const [cart, setCart] = useState([])

  return (
    <Contexts.cartContext.Provider value={{value: cart, func: setCart}}>
        {children}
    </Contexts.cartContext.Provider>
  )
}
