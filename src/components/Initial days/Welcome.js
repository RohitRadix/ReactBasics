//import { render } from "@testing-library/react";
import React from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.css'

class Welcome extends React.Component
{
    constructor(props)
    {
        super(props)

        this.state=
        {
            student:[
                {
                    name:"amit",
                    rollno:101
                },
                {
                    name:"vishal",
                    rollno:102
                },
                {
                    name:"vikee",
                    rollno:103
                },

            ]
        }
    }
    render()
    {
    return(
        <React.Fragment>
            <h1>{this.props.msg}</h1>
            <div className="container">
                <div className="row">
                  <div className="col-md-5">
                      <div className="card">
                          <div className="card-body bg-danger text-center ">
                              <ul className="list-group">
                                  <li className="list-group-item">
                                      {this.state.student[0].name}

                                  </li>
                                  <li className="list-group-item">
                                      {this.state.student[0].rollno}

                                  </li>
                                  <li className="list-group-item">
                                      {this.state.student[1].name}

                                  </li>
                                  <li className="list-group-item">
                                      {this.state.student[1].rollno}

                                  </li>
                                  <li className="list-group-item">
                                      {this.state.student[2].name}

                                  </li>
                                  <li className="list-group-item">
                                      {this.state.student[2].rollno}

                                  </li>
                              </ul>

                          </div>

                      </div>

                  </div>
                </div>

            </div>

        </React.Fragment>

    )
    }
}
export default Welcome