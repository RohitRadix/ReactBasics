import axios, { Axios } from "axios";
import React from "react";
class DataOnButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            user:[],
            error:"",
         };
    }
    update=()=>
    {
        axios.get("https://jsonplaceholder.typicode.com/users").then(res=>
            {
                this.setState({
                    user: res.data,
                })
                
            })
        .catch(err=> 
            {
                console.log(err);
            });
    }
    
    render() {
        return (
            <React.Fragment>
                <h4 className="text-center">Check Data from an API befor showing</h4>
                <div className="text-center">
                    <button type="submit" onClick={this.update} className="btn btn-warning align-center">Fetch data</button>
                </div>
                <br/><br/>
                <div className="container">
                <table className="table table-dark table-striped text-center">
                    <thead>
                        <tr>
                            <td>S. No.</td>
                            <td>Name</td>
                            <td>e-mail</td>
                            <td>Address</td>

                        </tr>
                    </thead>
                    <tbody>
                           {this.state.user.length > 0 ? 
                                
                          this.state.user.map(user=>
                            {
                                   return(  
                                       <tr>
                                           <td>{user.id}</td>
                                           <td>{user.name}</td>
                                           <td>{user.email}</td>
                                           <td>{user.address.street}{}</td>
                                       </tr>              
                                    )
                            }
                            
                             )
                                
                            : <h2>No data to show</h2>}          
                    </tbody>
                </table>
            </div>
            </React.Fragment>
        );
    }
}

export default DataOnButton;