import '../../styles/Cart.css'
import React, {useEffect,useState, useContext} from 'react'
import { addSingleDoc } from '../../utils/Firebase'
import Contexts from '../../Context/Items'

export default function Cart() {

  const [state, setState] = useState([{
    buyer:{
        name:""
    },
    items: [{
        name: "",
        price: 0
    }]
  }])

  const context = useContext(Contexts.cartContext)

  useEffect(()=>{
    setState(context.value)
  },[])

  const handleCheckout = ()=>{
    addSingleDoc(context.value)
  }

  return(
    <>
        <table>
            <thead>
                <tr>
                    <th>Nombre de producto</th>
                    <th>Compra</th>
                    <th>Precio</th>
                </tr>
            </thead>
            <tbody>
                {state.map((value)=>{
                    return (
                            <tr>
                                <td>{value.buyer.email}</td>
                                <td>{value.items[0].name}</td>
                                <td>{value.items[0].price}</td>
                            </tr>
                    )
                })}
            </tbody>
        </table>
        <button onClick={handleCheckout}>CHECKOUT</button>
    </>)
}
