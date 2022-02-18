import React from "react";

class ShowDynamicPract extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state={
                val: ''
        }

    }

    update=(event)=>{
        this.setState(
            {
                val: event.target.value
            }
        )
    }
    render()
    {
        return(
            <React.Fragment>
             <br/>
                <div className='container'>
                    <div className='card'>
                        <div className='card-heading'>
                            <h1>Dynamic text</h1>
                        </div>
                        <div className='card-body'>
                            <input type='text' value={this.state.val} className='form-control' onChange={this.update}></input>
                        </div>
                        <div className='card-footer'>
                            <h4>{this.state.val}</h4>
                        </div>
                    </div>
                </div>

            </React.Fragment>
        )
    }

}
export default ShowDynamicPract