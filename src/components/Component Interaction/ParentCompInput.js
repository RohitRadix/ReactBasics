import React from "react";
import ChildCompInput from "./ChildCompInput";

class ParentCompInput extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state={
            parentData:'',
            childData:''

        }
    }
    update=(event)=>
    {
        this.setState(
            {
               
                parentData: event.target.value
            }
        )
    }
    getData=(value)=>
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
                <div className="container mt-3">
                    <div className="card">
                        <div className="card-header bg-grey" >
                            <h1>Parent</h1>
                        </div>
                        <div className="card-body">
                        <input type="text" className="form-control" onChange={this.update}></input>
                        <br/>
                        <p>{this.state.childData}</p>
                        <ChildCompInput val={this.state.parentData} get={this.getData}/>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
export default ParentCompInput