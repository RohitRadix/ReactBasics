import React from "react";
import ChildComp from "./ChildComp";
class ParentComp extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state={
            parentMsg:"Hello I'm parent component data",
            childData:"",
        }
    }
    recieve=(value)=>
    {
        this.setState(
            {
               childData: value
            }
        )
    }
    render()
    {
        return(
            <React.Fragment>
                <div className='container mt-5'>
                    <div className='card'>
                        <div className='card-heading bg-grey'>
                        <h1 className='mt-2'>Parent</h1>
                        <p>{this.state.childData}</p>
                        </div>
                        <div className='card-body'>
                            <ChildComp msg={this.state.parentMsg} msgToSend={this.recieve} />
                            

                        </div>
                    </div>
                </div>
            </React.Fragment>
        );

    }
}
export default ParentComp