import React from "react";
class Mounting extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state={
            z:2,
            greet:'This is mounting Tutorial',
            a:23,
           
        }
        
    }
    static getDerivedStateFromProps(props,state)
    {
        console.log(props,state);
        return null;
    }
    componentDidMount()
    {
        return(
            console.log("Component did mount")
        )
    }

    render(){
        return(
            <React.Fragment>
                <h1 className="h1 text-center">Mounting</h1>

            </React.Fragment>
        );
    };
}
export default Mounting