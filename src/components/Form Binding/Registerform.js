import React from "react";
class Registerform extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state={
               user:{
                    username:"",
                    email:"",
                    password:""
                },
                toggle:'false'
            }
    }
    update=(event)=>
    {
        this.setState(
            {
                user:
                {
                    ...this.state.user, 
                    [event.target.name]:event.target.value
                }
            }
        )
    }
    show=(event)=>
    {
        event.preventDefault()
        if(this.state.toggle===true)
        {
        
        console.log(this.state.user)
        }
        else{
            // console.log('Fail')
            console.log(this.state.user)
        }
    }
    check=(event)=>
    {
        if(this.state.toggle===false)
        {
            this.setState(
                {
                    toggle: 'true'
                }
            )
        }
        else{
            this.setState(
                {
                    toggle:'false'
                }
            )
        }
    }
    
    render(){
        return(
            <React.Fragment>
                <pre>{JSON.stringify(this.state.user)}</pre>
            <div className=' container mt-5'>
                <div className='card col-8'>
                    <div className='card-header'>
                        <h1>Signup form</h1>
                    </div>
                    <div className='card-body'>
                        <form onSubmit={this.show}>
                            <div className="form-group" >
                                <input
                                name="username"
                                // value={this.state.user.name} value lo par khaali '' mai 
                                onChange={this.update}
                                 type="text" className="form-control" placeholder="username"/>

                            </div>
                            <div className="form-group" >
                                <br/>
                                <input 
                                name="email"
                                value={this.state.user.email}
                                onChange={this.update}
                                 type="email" className="form-control" placeholder="email"/>

                            </div>
                            <div className="form-group" >
                                <br/>
                                <input 
                                name="password"
                                value={this.state.user.password}
                                onChange={this.update}
                                type="password" className="form-control" placeholder="password"/>
                            </div>
                            <div className='form-group'>
                                <br/>
                                <input type='checkbox' required/>
                                &nbsp;
                                <label>Accept terms and conditions </label>
                            </div>
                            <div>
                                <br/>
                                <input type="submit" value="Register" className="btn btn-sm bg-black text-white"/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            </React.Fragment>
        )
    }
}
export default Registerform