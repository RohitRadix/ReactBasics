import React from "react";
import Comp3 from "./Comp3";
class Comp2 extends React.Component
{
    constructor(props)
    {
        super(props)
        
    }
    render()
    {
        return(
            <React.Fragment>
                <Comp3/>
                
            </React.Fragment>
        );
    }
}
export default Comp2
