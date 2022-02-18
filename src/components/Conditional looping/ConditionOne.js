import React from "react";
import { IoFastFoodSharp } from "react-icons/io5";
import { AiFillCode } from "react-icons/ai";
import { GiNightSleep } from "react-icons/gi";
class ConditionOne extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state={
            user:
            {
            isEating:false,
            isCoding:false,
            isSleeping:false,
            }
        }
    }
    change=(event)=>{
        console.log(event.target.value)
        this.setState({
            user:
            {
                ...this.state.user,
                [event.target.user.value]:true
            }
        })
        //   if([event.target.value] === false)
        
        // this.setState(
        //     {
               
        //         [event.taget.value]:true,
               
        //     }
        // )
        // else{
        //    this.setState(
        //        {
        //            [event.target.value]:false
        //        }
        //    )
        // }
    }
    

    render()
    {
        return(
            <React.Fragment>
                {/* <pre>{JSON.stringify(this.state.user)}</pre>  */}
                <div className="container">
                    <div className="card">
                        <div className="card-header">
                            <h3>Choose what are you doing</h3>
                        </div>
                        < div className="card-body">
                            <div className="row">
                                <div className="col">
                                    <form>
                                        <input type='radio'name='check'onClick={this.change}value={this.state.user.isEating}></input>&nbsp;
                                        <label>Eating</label>
                                        <br/><br/>
                                        <input type="radio" name='check'onClick={this.change}value={this.state.user.isCoding}></input>&nbsp;
                                        <label>Coding</label>
                                        <br/><br/>
                                        <input type="radio" name='check'onClick={this.change}value={this.state.user.isSleeping}></input>&nbsp;
                                        <label>Sleeping</label>
                                        <br/><br/>
                                        </form>
                                    
                                </div>
                                <div className="col">
                                    {(this.state.user.isEating===true) ?  <div className="alert alert-success">
                                        <h2><IoFastFoodSharp/>&nbsp; Eating</h2>
                                    </div>
                                    : null
                                     }

                                    {(this.state.user.isCoding===true)?
                                    <div className="alert alert-warning">
                                        <h2><AiFillCode/>&nbsp; Coding</h2>
                                        </div>
                                    : null
                                    }
                                    {(this.state.user.isSleeping===true)?
                                    <div className="alert alert-primary">
                                        <h2><GiNightSleep/>&nbsp; Sleeping</h2>
                                    </div>
                                    : null
                                     }
                                    {/* {
                                        this.state.user.isEating && 
                                        <React.Fragment>
                                            <h1>Eating</h1>
                                        </React.Fragment>
                                    }
                                    {
                                        this.state.user.isCoding && 
                                        <React.Fragment>
                                            <h1>Coding</h1>
                                        </React.Fragment>
                                    }
                                    {
                                        this.state.user.isSleeping && 
                                        <React.Fragment>
                                            <h1>sleep</h1>
                                        </React.Fragment>
                                    } */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
export default ConditionOne