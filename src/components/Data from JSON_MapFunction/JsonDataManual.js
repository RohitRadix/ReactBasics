import React from "react";
import { UserData } from "./UserData";
class JsonData extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state={
            usersInfo: [
                {
                    sno:1,
                    image: '',
                    name: 'Rohit'

                }
            ]
        }
    }
    render()
    {
        return(
            <React.Fragment>
                <div className='container mt-4'>
                    <h2 className='text-blue'>Content</h2>
                    <br/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed egestas egestas fringilla phasellus faucibus. Enim tortor at auctor urna nunc id cursus metus. Cras pulvinar mattis nunc sed blandit libero volutpat. Mattis nunc sed blandit libero volutpat sed.</p>
                    <table className='table table-dark table-striped text-center'>
                        <thead>
                            <tr>
                                <th scope='col'>S.No</th>
                                <th scope='col'>Image</th>
                                <th scope='col'>Name</th>
                                <th scope='col'>Age</th>
                                <th scope='col'>Gender</th>
                                <th scope='col'>Location</th>
                            </tr>
                            </thead>
                            <tbody>
                            
                               {
                                   this.state.usersInfo.map((user)=>
                                   {
                                    return(
                                            <tr>
                                                <td>{user.login.uuid.substr(user.login.uuid.length-5)}
                                                </td>
                                                <td>
                                                    <img src={user.picture.thumbnail}/>
                                                </td>
                                                <td>{user.name.title} {user.name.first} {user.name.last}</td>
                                                <td>{user.dob.age}</td>
                                                <td>{user.gender}</td>
                                                <td>{user.location.street.number} {user.location.street.name}</td>
                                            </tr>
                                    )
                                   })
                               }

                            </tbody>
                    </table>
                </div>
            </React.Fragment>
        )
    }
}
export default JsonData