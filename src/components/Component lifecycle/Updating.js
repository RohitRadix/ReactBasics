import React, {Component} from "react";
class Updating extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            greet:"Welcome to Updating"
         };
    }
    // static getDerivedStateFromProps(props,state) // because of constructior
    // {
    //     console.log(props,state);
    //     return null;
    // }
    shouldComponentUpdate(){    //This function will decide whether to show the change or not 
        console.log("Should comp update?")
        return true //This line is imp 

    }

    update=()=>
    
    {
        this.setState(
            {
                greet:"State has been updated",
            }
        )
    }
    getSnapshotBeforeUpdate(prevProps, prevState)
    {
        console.log("getSnapshotBeforeUpdate This is sanpshot before updating");
        console.log(prevProps, prevState);
        return true
    }
   
   
    componentDidUpdate()
    {
        console.log(" componentDidUpdate()is evoked after updation")
    }

    render() {
        return (
            <React.Fragment>
                <div className="  text-center">
                 <h1 className="h1 ">Updating Phase</h1>
                 <br/>
                 <br/>
                 <h2>{this.state.greet}</h2>
                 <button className="btn btn-success"onClick={this.update}>Click me to update state</button>
                 </div>
              
            </React.Fragment>
           
            
        );
    }
}

export default Updating;