import ShowPassComponent from './ShowPassComponent'
import { render } from "react-dom";
import { useReactToPrint } from "react-to-print";
import  { Component, useRef } from 'react';
import jsPDF from "jspdf";
import { Redirect } from 'react-router';
import HeaderComponent from './HeaderComponent';
import '../css/button.css'



class pdf extends Component {
       
  constructor(props) {
    super(props)
    this.state = {
        
        
    }
    
}
  
logout = () => {
  localStorage.clear();

  window.location.href = "/";
} 
    componentDidMount(){
        const Example = () => {
            const componentRef = useRef();
            const handlePrint = useReactToPrint({
              content: () => componentRef.current,
            }
         
            );
           
            return (
              
              <div>
                                 <HeaderComponent />

            <span style={{color:"green"}}></span>
      <button onClick={this.logout} class='btn btn-success pull-right'>
  Logout
          </button>
                <ShowPassComponent ref={componentRef} />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                <button onClick={handlePrint} class="btn" style={{width:"100%"}}><i class="fa fa-download"></i> Download E-Pass</button>
              
              </div>
            );
           
          };
          
       
          render(<Example />, document.querySelector("#root"));
    }
    render() {
 
        return (
            <div>
                
            </div>
        );
    }
}




 export  default  pdf;