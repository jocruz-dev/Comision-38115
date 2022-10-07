import React, {useState} from 'react'
import Contexts from './Items'

export default function CartContext({children}) {  

  const [state, setState] = useState([])

  return (
    <Contexts.cartContext.Provider value={{value:state, func:setState}}>
        {children}
    </Contexts.cartContext.Provider>
  )
}
