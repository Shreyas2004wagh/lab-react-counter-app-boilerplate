import React,{Component} from "react";

export default class Class extends Component
{
    constructor()
    {
        super()
        this.state={count:0}
    }
    handleClick=(val)=>{

        this.setState({count:this.state.count+val})
    }
    render()
    {
        return(
            <>
            <h1>Counter App</h1>
            <p>{this.state.count}</p>
            <button onClick={()=>{this.handleClick(1)}}>+</button>
            <button onClick={()=>{this.handleClick(-1)}}>-</button>
            <button onClick={()=>{this.handleClick(-this.state.count)}}>RESET</button>
            </>
        )
        }
}