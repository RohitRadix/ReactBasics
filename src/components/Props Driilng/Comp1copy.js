import React from "react";

import Comp2copy from "./Comp2copy";
class Comp1copy extends React.Component
{
    constructor(props)
    {
        super(props)
        
    }
    render()
    {
        return(
            <React.Fragment>
                <Comp2copy/>
                
            </React.Fragment>
        );
    }
}
export default Comp1copy