import { Component } from "react";

class Boton extends Component {
    render(){
        return(
            <button>{this.props.name}</button>
        )
    }
}

class List extends Component {

    constructor (){
        super()
        this.state = {
            count: 0
        }
    }

    handleClick = ()=>{
        this.setState({count: this.state.count + 1})
    }

    render(){
        return(
            <table>
                <tr>
                    <th>{this.state.count}</th>
                    <th>BOTON</th>
                    <th>Options</th>
                </tr>
                
                <Row></Row>
                <Row></Row>
                <Row></Row>
                
                <button onClick={this.handleClick}>CLICK</button>

            </table>
        )
    }
}



class Title extends Component {
    render(){
        return(
            <p>Titulo</p>
        )
    }
}

class Option extends Component {
    render(){
        return(
            <select>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
            </select>
        )
    }
}

class Row extends Component {
    render(){
        return(
            <tr>
                <td>
                    <Title></Title>
                </td>
                <td>
                    <Boton name="ROW"></Boton>
                </td>
                <td>
                    <Option></Option>
                </td>
            </tr>
        )
    }
}

// const List = ()=>{
//     return(
//         <table>
//                 <tr>
//                     <th>NAME</th>
//                     <th>BOTON</th>
//                 </tr>
                
//                 <tr>
//                     <td>
//                         <p>NAME</p>
//                     </td>
//                     <td>
//                         <button>CLICK</button>
//                     </td>
//                 </tr>
//                 <tr>
//                     <td>
//                         <p>NAME</p>
//                     </td>
//                     <td>
//                         <button>CLICK</button>
//                     </td>
//                 </tr>
//             </table>
//     )
// }

// const Boton = ()=>{
//     return(
//         <button>CLICK</button>
//     )
// }

// const Title = ()=>{
//     return(
//         <p>NAME</p>
//     )
// }

// const Option = ()=>{
//     return(
//         <select>
//             <option>1</option>
//             <option>2</option>
//             <option>3</option>
//             <option>4</option>
//         </select>
//     )
// }

export default List
