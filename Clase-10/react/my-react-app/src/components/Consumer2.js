import React, {useContext} from 'react'
import Contexts from '../Context/Items'

export default function Consumer2() {

    const contexto = useContext(Contexts.cartContext)

  return (
        <>
            {contexto.value.map((value)=>(
                <>
                    <p>{value.name}</p>
                    <img src={value.image}></img>
                </>
            ))}
        </>
  )
}
