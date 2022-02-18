import axios from "axios";
import React from "react";

class ContactList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            user:[],
            userSend:[],         };
    }
    sendData=(event)=>
    {
      
        this.setState(
            {
                userSend: event.target.data
            }
        )
        
        
        axios.get("https://jsonplaceholder.typicode.com/users/"+event.target.value).then(res=>
        {
            this.setState(
                
                {
                    userSend: res.data,
                }
            
            )
            this.props.val(res.data)
        })
        .catch(err=>
            {
                console.log(err);
            })
    }
    componentDidMount()
    {
        axios.get("https://jsonplaceholder.typicode.com/users").then(res=>
        {
            this.setState(
                {
                    user: res.data,
                }

            )
        })
        .catch(err=>
            {
                console.log(err);
            })
    }
    render() {
        return (
            <React.Fragment>
                <table className="table table-dark table-striped text-center ">
                    <thead>
                        <tr>
                            <td>S.no</td>
                            <td>Name</td>
                            <td>Email</td>
                            <td>Phone</td>
                            <td></td>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.user.map(user=>
                            {
                                return(
                                    <tr >
                                        <td>{user.id}</td>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>{user.phone}</td>
                                        <td><button value= {user.id} onClick={this.sendData} className="btn btn-light">View</button></td>

                                    </tr>
                                )
                            })}
                    </tbody>
                </table>
            </React.Fragment>
        );
    }
}

export default ContactList;