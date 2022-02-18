import React from "react";
class ShowPass extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state={
            
            intype: 'password'
        }
    }
    
    show=()=>{
        if(this.state.intype=== 'password')
        {
           
            this.setState(
                {
                    intype: 'text'
                }
            )             
        }    
        else{
            this.setState(
                {
                    intype: 'password'
                }
            )
        }
    }
    render()
    {
        return(
            <React.Fragment>
                <div className='container'>
                    <div className='card'>
                        <div className='card-header'>
                            <h1>Show password</h1>
                        </div>
                        <div className='card-body'>
                            <input className='form-control;' type={this.state.intype}  ></input>
                            <input type='checkbox' onClick={this.show} ></input>
                            <label>Show password</label>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default ShowPass