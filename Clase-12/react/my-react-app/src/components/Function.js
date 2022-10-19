import '../styles/List.css'
import { useParams, NavLink } from 'react-router-dom'
import {useEffect, useState, useContext} from "react"
import Contexts from '../Context/Items'
import db from '../utils/Firebase'
import {collection, getDocs, query, where, doc, getDoc} from 'firebase/firestore'

const Function = ({items, theme}) => {
    const {id} = useParams();
    const [state, setState] = useState([])
    const [category, setCategory] = useState([])
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
        const data = query(collection(db(), 'categorias'),where("name","==", "computadoras"))
        getDocs(data)
            .then((value)=>{
                setCategory(value.docs.map((value)=>{
                    return value.data()
                }))
            })
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
                {category.map((value)=>{
                    return <NavLink to={`/items/${value.name}`} key={value.key}>{value.name}</NavLink>
                })}
                {state.map((item)=>{
                    return (
                        <>
                            <img src={item.image} key={item.id}></img>
                            <p key={item.id+1}><NavLink to={`/items/${item.id}`}>{item.name}</NavLink></p>
                        </>
                    )
                })}
            </div>
        </>
    )
}

export default Function

