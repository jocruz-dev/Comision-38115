import { useState, useEffect } from "react"

const Function = ({render}) => {

    const [state, setState] = useState("Tiempo")
    const [count, setCount] = useState(0)

    const handleClick = ()=>{
        const date = new Date()
        setState(String(date))
        setCount(count + 1)
    }
    useEffect(()=>{
        console.log("Montado");
    },)

    return(
        <div>
            <h1>Componente de funcion</h1>
            <h1>Tiempo</h1>
            <p>{state}</p>
            <h1>Contador</h1>
            <p>{count}</p>
            <button onClick={handleClick}>CLICK</button>
            {render()}
        </div>
    )
}

export default Function

