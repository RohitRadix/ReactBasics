import React from "react";
class Form extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state={
               user:{
                    username:"",
                    email:"",
                    password:""
                }
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
        console.log(this.state.user)
    }
    
    
    render(){
        return(
            <React.Fragment>
                {/* <pre>{JSON.stringify(this.state.user)}</pre> */}
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
                                <input 
                                name="email"
                                value={this.state.user.email}
                                onChange={this.update}
                                 type="email" className="form-control" placeholder="email"/>

                            </div>
                            <div className="form-group" >
                                <input 
                                name="password"
                                value={this.state.user.password}
                                onChange={this.update}
                                type="password" className="form-control" placeholder="password"/>
                            </div>
                            <div>
                                <input type="submit" value="login" className="btn btn-sm btn-danger"/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            </React.Fragment>
        )
    }
}
export default Form