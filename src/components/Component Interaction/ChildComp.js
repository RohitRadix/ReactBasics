import React from "react";
class ChildComp extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state={
            childMsg:"Hello I'm child component data",
            

        }
    }
    send=()=>{

        this.props.msgToSend(this.state.childMsg)
    }
    render()
    {
        return(
            <React.Fragment>
               <div className='container mt-2'>
                    <div className='card'>
                        <div className='card-heading'>
                        <h1>Child</h1>
                        </div>
                        <div className='card-body'>
                            {this.props.msg}
                            <br/>
                            <br/>
                            <button className='btn btn-success'onClick={this.send}>Send data to parent</button>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default ChildComp