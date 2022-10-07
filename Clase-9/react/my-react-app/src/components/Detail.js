import {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import Abstract from './Abstract'

import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items:center;
  justify-content:center;
  width: 100%;
`

export const Detail = () => {

const {id} = useParams()
let navigate = useNavigate();
const [state, setState] = useState({
    name:""
})
const [options, setOptions] = useState([
    {value:1, text: "Rick"},
    {value:2, text: "Morty"},
    {value:3, text: "Summer"},
])

useEffect(() => {
    const res = fetch(`https://rickandmortyapi.com/api/character/${id}`)
    res.then((res)=>{
      return res.json()
    }).then((value)=>{
        setState(value)
    })
  return () => {
    console.log(state);
  }
}, [id])


const handleClick = (e)=>{
    console.log(e);
    let itemId 
    if(e.target.id == "forward"){
        itemId = parseInt(id) + 1
    }else{
        itemId = parseInt(id) > 1 ? parseInt(id) - 1 : parseInt(id)
    }
    navigate(`/items/${itemId}`)
}

function handleChange(e){
    console.log("Estoy en el padre", e)
}

  return (
    <Container>
        <h1>{state.name}</h1>
        <img src={state.image}></img>
        <Abstract option={options} onSelect={handleChange}></Abstract>
        <div>
            <input onKeyDown={handleClick}></input>
            <button id='back' onClick={handleClick}>Anterior</button>
            <button id='forward' onClick={handleClick}>Siguiente</button>
        </div>
    </Container>
  )
}
