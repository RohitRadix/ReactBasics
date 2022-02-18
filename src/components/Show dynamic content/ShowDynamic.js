import React from "react";
class ShowDynamic extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state={
            user:''                             //Made a variable to store the value of "value" of input text
        }
    }

update=(event)=>                                //in ths method we used 'event' a default parameter
{                                                   
    this.setState(                              //Since we need to change state prop we will use set state 
        {
            user: event.target.value            //Using event.target.value we will goto target i.e. input field
        }                                       //and it will access the value of input field and then update   
    )                                           //it      
}

    render(){

        return(
           <React.Fragment>
               <div className='container'>
                   <div className='card-heading'>
                       <h1>Dynamic text change</h1>
                   </div>
                   <div className='card-body'>                  
                       <input onChange={this.update}            //Created an iput field // Used an Event "onChange"
                    //    value={this.state.user}                  //onChange we called update function//

                       type='text' className='form-control'/>
                   </div>
                   <div className='card-footer'>
                     <h4>{this.state.user}</h4>              
                   </div>                                          
               </div>
           </React.Fragment>                                       //At last we will  print out the value in footer
        )
    }

}
export default ShowDynamic