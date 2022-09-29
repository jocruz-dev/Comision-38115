import "../styles/List.css"

const Function = ({items}) => {

    return(
        <div>
            <p>Funcion</p>
            <div className="list-container">
                {items.items.map((item,index)=> {
                return (
                    <div>
                        <p key={index}>Item: {item}</p>
                    </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Function

