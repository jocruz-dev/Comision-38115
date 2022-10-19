import '../styles/List.css'
import { useParams, NavLink } from 'react-router-dom'
import {useEffect, useState, useContext} from "react"
import Contexts from '../Context/Items'

const Function = ({items, theme}) => {
    const {id} = useParams();
    const [state, setState] = useState([])
    const [formType, setFormType] = useState(true)
    const context = useContext(Contexts.themeContext)


    const formTest = ()=>{
        return (
            <form>
                <input type="text"></input>
                <button type='submit'>CLICK</button>
            </form>
        )
    }

    const formTest2 = ()=>{
        return (
            <form>
                <input type="password"></input>
                <button type='submit'>CLICK</button>
            </form>
        )
    }

    const handleChangeForm = ()=>{
        setFormType(false)
    }

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

    const changeTheme = ()=>{
        context.func(!context.value)
    }

    return(
        <>
        <button onClick={changeTheme}>{context.value ? "DARK" : "LIGHT"}</button>
            <h1 className={context.value ? "text-light" : "text-dark"}>Componente de funcion </h1>
            <div className='list-container'>
                {state.map((item)=>{
                    return (
                        <>
                            <img src={item.image} key={item.id}></img>
                            <p key={item.id}><NavLink to={`/items/${item.id}`}>{item.name}</NavLink></p>
                        </>
                    )
                })}
            </div>
        </>
    )
}

export default Function

