import {useEffect, useState, useContext} from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import Contexts from '../Context/Items'
import { filterCollection, addSingleDoc } from '../utils/Firebase'

import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items:center;
  justify-content:center;
  width: 80%;
  margin-left:10%;
  margin-rigth: 10%;
`

export const Detail = () => {

const context = useContext(Contexts.cartContext)

const {id} = useParams()
let navigate = useNavigate();
const [state, setState] = useState({})

useEffect(() => {
    const res = filterCollection('items',["name","==",id])
    res.then((res)=>{
      setState(res.docs.map((value)=>value.data())[0])
    })
  return () => {
    console.log(state);
  }
}, [])

function handleCheckout(e) {
    context.func([...context.value,{
      buyer: {
        name: "Test",
        phone: 12123,
        email: "test@test"
      },
      items:[{
        name: state.name,
        price: state.price
      }],
      total: state.price
    }])
    console.log(context.value);
    navigate("/cart")
}

  return (
    <Container>
        <h1>{state.name}</h1>
        <img width="300" src={state.img}></img>
        <article>{state.detail}</article>
        <h2>$ {state.price}.00</h2>
        <button onClick={handleCheckout}>CHECKOUT</button>
    </Container>
  )
}
