import React, { Component } from "react";

class Class extends Component {

    constructor(){
        super()
        this.state = {
            name: "Coder"
        }
    }
    componentDidMount(){
        console.log("montado")
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log("shouldComponentUpdate")
        console.log(nextProps, nextState)
        return true
    }

    componentDidUpdate(prevProps, prevState){
        console.log("componentDidUpdate")
        console.log(prevProps, prevState)
    }

    componentWillUnmount(){
        console.log("Me mori")
    }

    handleClick = ()=>{
        this.setState({
            name: "Adios"
        })
    }
    
    render(){
        return(
            <React.Fragment>
                <h1>Componente de clase {this.state.name}</h1>
                <button onClick={this.handleClick}>CLICK</button>
            </React.Fragment>
        )
    }
}

export default Class
