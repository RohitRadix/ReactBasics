import React, { Component } from "react"; 
class Unmounting extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    componentWillUnmount()
    {
        console.log("Yes the component did unmount");
    }
    render() {
        return (
            <React.Fragment>
                <div className="text-center">
                    <h1>This is a child component</h1>
                </div>
            </React.Fragment>
        );
    }
}

export default Unmounting;