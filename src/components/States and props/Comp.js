import React from "react";
import Comp2 from "./Comp2";

class Comp extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state=
        {
            info: 'Im am first component ',
            

        }
    }
render()
{
    return(
        <React.Fragment>
         <h6>{this.state.info}</h6>   
        <h7>{this.props.CompOut}</h7>
        <Comp2 msg={this.state.info}/>
        </React.Fragment>
    )

}
}
export default Comp