import '../../styles/List.css'
import { useParams, NavLink } from 'react-router-dom'
import {useEffect, useState, useContext} from "react"
import { filterCollection } from '../../utils/Firebase'

const Function = () => {
    const {id} = useParams();
    const [items, setItems] = useState([])


    useEffect(()=>{
        const res = filterCollection("items",["categoryId","==",id])
        res.then((res)=>{
            setItems(res.docs.map((value)=>value.data()));
        })
      },[id])

    return(
        <>
            <div className='list-container'>
                {items.map((value)=>{
                    return (
                        <div className='item-list'>
                            <img width="200" src={value.img}></img>
                            <NavLink to={`/items/${value.name}`} key={value.key}>{value.name}
                            </NavLink>
                            <p>$ {value.price}.00</p>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default Function

