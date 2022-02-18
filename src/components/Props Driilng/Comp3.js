import React, { useContext } from "react";
import { UserContext } from "../contaxt/UserContext";
//import { UserContaxt } from "../contaxt/UserContext";

class Comp3 extends React.Component
{
    constructor(props)
    {
        super(props)
       
    }
    render()
    {
        return(
            <React.Fragment>
                <UserContext.Consumer>
                  {
                      (user)=>
                
                      {
                            return(
                                <pre>{JSON.stringify(user)}</pre>
                                
                            )
                            
                      }

                  }
                </UserContext.Consumer>
                
                
            </React.Fragment>
            
        );
    }
}
export default Comp3
