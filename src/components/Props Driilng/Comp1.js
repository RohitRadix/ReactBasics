import React from "react";
import Comp2 from "./Comp2";
class Comp1 extends React.Component
{
    constructor(props)
    {
        super(props)
        
    }
    render()
    {
        return(
            <React.Fragment>
                <Comp2/>
                
            </React.Fragment>
        );
    }
}
export default Comp1