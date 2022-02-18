import React, { useState } from "react";

import { FaPlusCircle,FaMinusCircle } from "react-icons/fa";
class Cart extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state={
            qty:1,
            price:250,
            total:250,

        }
    }
    add=()=>
    {
        this.setState(
            {
                qty: this.state.qty+1,
                        
            }
        )
    }
    sub=()=>
    {
            //The treditional way 
                if(this.state.qty > 1)
                {
                    this.setState(
                        {
                            qty: this.state.qty - 1
                        }
                     )
                }
                else{
                    this.setState(
                        {
                            qty:1
                        }
                    )     
            }

        // Using ternary operator
 

        
    }

    render()
    {
    return( 
        
           <React.Fragment>
              <div className='App'>
               <table class="table">
                    <thead class="thead-dark">
                        <tr>
                        <th scope="col">S.no.</th>
                        <th scope="col">Image</th>
                        <th scope="col">Price</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <th scope="row">1</th>
                        <td><img src='https://www.ikea.com/in/en/images/products/ikea-365-water-bottle-dark-grey__0916298_pe785100_s5.jpg?f=s' className='Img'></img></td>
                        <td>{this.state.price}</td>
                        <td><FaPlusCircle size={25} color={'green'}onClick={this.add}></FaPlusCircle>{this.state.qty}<FaMinusCircle size={25} color={'red'} onClick={this.sub}></FaMinusCircle></td>
                        <td>{this.state.qty*this.state.price}</td>
                        </tr>
                    </tbody>
                </table>
                </div>
           </React.Fragment>        
    )

    
    }
}



export default Cart