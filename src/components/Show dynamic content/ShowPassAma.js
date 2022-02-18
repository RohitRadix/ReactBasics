import React from "react";
class ShowPassAma extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state={
            pass: '',
            show:'',
            checked: '',
        }
    }
    update=(event)=>{
        this.setState(
            {
                pass: event.target.value
            }
        )
    }
    showPass=(event)=>{
            this.setState(
            {
                show: this.state.pass
            }
        )
        
    }
    render()
    {
        return(
            <div className='container'>
                <div className='card col-8'>
                    <div className='card-heading bg-black text-white '>
                        <h1>Amazon style show password</h1>
                    </div>
                    <div className='card-body'>
                        <input type='password' className='form-control' value={this.state.pass} onChange={this.update} ></input>
                        <label>Show password</label>
                        <input id='checkbox' type='checkbox'  className='col-1' onChange={this.showPass} ></input>                       
                    </div>
                    <div className='card-footer bg-white'>
                        <p>{this.state.show}</p>
                    </div>

                </div>
            </div>
        )
    }
}
export default ShowPassAma