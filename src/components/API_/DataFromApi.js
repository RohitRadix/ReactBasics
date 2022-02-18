import axios, { Axios } from "axios";
import React from "react";
class DataFromApi extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            user:[],
            apiLink:"https://jsonplaceholder.typicode.com/users",
            error:"",
         };
    }
    componentDidMount()
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
                <h4 className="text-center">Data from an API</h4>
                <ul>
                    {this.state.user.map(user=>
                    
                        <li key={user}>{user.id}{user.name}</li>,
                        )}
                </ul>
            </React.Fragment>
        );
    }
}

export default DataFromApi;