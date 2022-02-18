import React from 'react';
class ContactDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <div className="card card-body">
                        <img className="img-fluid img-thumbnail" src="https:/cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"></img>
                        <br/>
                        <h2 className="text-center .h2">{this.props.userSend.name}</h2>
                        <div className="container text-left">
                            <table className="table table-secondary">
                                <tr>
                                <label>S.no</label>
                                <td>{this.props.userSend.id}</td>
                                </tr>
                                <tr>
                                <label>Email</label>
                                <td>{this.props.userSend.email}</td>
                                </tr>
                                <tr>
                                    <label>Phone no.</label>
                                <td>{this.props.userSend.phone}</td>
                                </tr>
                                
                            </table>
                        </div>
                    </div>

                </div>
            </React.Fragment>
        );
    }
}

export default ContactDetails;