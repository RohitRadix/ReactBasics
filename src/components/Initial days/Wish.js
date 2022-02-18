import React, { useState } from "react";
class Wish extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state={
            msg:'',  
        }
    }
    greet=(value)=>    
    {
       this.setState(
           {
               msg: value,
           }
       )
    }
    render()
    {
        return(
            
            <div className='App'>
            <h1>Wish</h1>
            <h3>{this.state.msg}</h3>
                    <button onClick={this.greet.bind(this, 'Good Morning')}>Good Morning</button>
                    <button onClick={this.greet.bind(this, 'Good Afternoon')}>Good Afternoon</button>
                    <button onClick={this.greet.bind(this, 'Good Evening')}>Good Evening</button>
                </div>  
        )
    }
}
export default Wish  