import '../styles/List.css'
import { useParams, NavLink } from 'react-router-dom'
import {useEffect, useState} from "react"

const Function = ({items}) => {
    const {id} = useParams();
    const [state, setState] = useState([])


    useEffect(()=>{
        console.log("URL Params",id);
        const res = fetch("https://rickandmortyapi.com/api/character")
        res.then((res)=>{
          return res.json()
        }).then((value)=>{
          setState(value.results)
        })
      },[])


    useEffect(()=>{
        console.log(state);
        const res = state.filter((value)=>{
            return value.id == id.id
        })
        console.log(res);
        setState(res)
    },[id])

    return(
        <>
            <h1>Componente de funcion </h1>
            <div className='list-container'>
                {state.map((item)=>{
                    return (
                        <>
                            <img src={item.image} key={item.id}></img>
                            <p><NavLink to={`/items/${item.id}`}>{item.name}</NavLink></p>
                        </>
                    )
                })}
            </div>
        </>
    )
}

export default Function

