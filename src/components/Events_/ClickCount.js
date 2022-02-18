import React, { useState }  from "react";
class ClickCount extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state ={
            count: 0
        }
        
    }
    update=()=>
    {
      
       this.setState(
           {
               count: this.state.count+1
           }
       )
      
        
    }
    render()
    {
        return(
           
                <div className='App'>
                  <h1 >Click counter</h1>
                
                  <h3>{this.state.count}</h3>
                  <button onClick={this.update}>Click me</button>
                  </div>
                  
        )

    }
}
export default ClickCount