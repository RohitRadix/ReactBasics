import React, { useContext } from "react";
import { Context } from "../contaxt/Context";



class Comp3copy extends React.Component
{
    constructor(props)
    {
        super(props)
       
    }
    render()
    {
        return(
            <React.Fragment>
                <Context.Consumer>
                {
                    
                    (name)=>{
                        return(
                            <pre>{JSON.stringify(name)}</pre>
                        )
                    }
                }
                </Context.Consumer>
                
              
                
            </React.Fragment>
            
        );
    }
}
export default Comp3copy
