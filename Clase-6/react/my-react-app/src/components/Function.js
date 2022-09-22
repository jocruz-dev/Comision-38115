
const Function = ({items, name, children}) => {

    return(
        <div>
            <h1>{name} Componente de funcion </h1>
            {items.map((item,index)=> (<p key={index}>{item}</p>))}
        </div>
    )
}

export default Function

