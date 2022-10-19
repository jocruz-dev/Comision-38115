import React, {useContext} from 'react'
import Contexts from '../Context/Items'

export default function Consumer() {

const test = useContext(Contexts.cartContext)
  return (
    <>
        <h1>Consumer</h1>
        <p>{test}</p>
    </>
  )
}
