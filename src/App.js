import React from 'react';
import './App.css';
import DataOnButton from './components/API_/DataOnButton';
import ContactDetails from './components/ContactApp/ContactDetails';
import ContactList from './components/ContactApp/ContactList';
import ClickCount from './components/Events_/ClickCount';
import Cart from './components/Initial days/Cart';
import Wish from './components/Initial days/Wish';

class App extends React.Component
{
  constructor(props)
  {
    super(props)
    this.state=
    {
      user:[],
       
    }
    
  }
  recieve=(value)=>
  {
    this.setState(
      {
        ...this.state,
        user: value,
      }
    )
  }
 

  
  render()
  {
    return(
      <React.Fragment>
        
         {/* <div className="coantainer ">
           <h1 className= "text-center">Contact List App</h1>
          
           <div className="row">
            <div className="col-8 mt-3">
                <ContactList val={this.recieve}/>
            </div>
            <div className="col-4">
                <ContactDetails userSend={this.state.user}/>
            </div>
           </div>
         </div> */}
         {/* <Wish/> */}
         {/* <ClickCount/> */}
         <Cart/>
      </React.Fragment>
  
         )
     }
    } 

export default App;
