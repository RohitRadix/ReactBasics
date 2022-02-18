import React from "react";
import Comp from "./Comp";
class Comp2 extends React.Component
{
    constructor(props)
    {
        super(props)
        // this.state=
        // {
        //         info1: 'This is the second component ',
        //         out: 'This is the second component value used in another component',
        // }
    }
    render()
    {
        return(
            <React.Fragment>
                <h1>{this.props.msg}</h1>
                <h1>{this.props.msg1}</h1>


               
            </React.Fragment>
        )
    
   }
}
export default Comp2