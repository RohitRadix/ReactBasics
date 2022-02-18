import React from "react";
class ChildCompInputcopy extends React.Component
{
  constructor(props)
    {
        super(props)
        this.state={

        }
    }
    send=(event)=>
    {
      this.props.get(event.target.value)
    }
    render()
    {
        return(
            <React.Fragment>
                <div className="container mt-2">
                    <div className="card">
                        <div className="card-header ">
                            <h1>Child</h1>
                        </div>
                        <div className="card-body">
                            <input type="text" className="form-control"onChange={this.send}></input>
                            {this.props.abc}
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }

}
export default ChildCompInputcopy