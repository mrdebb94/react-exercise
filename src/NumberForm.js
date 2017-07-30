import { connect } from 'react-redux'
import React from 'react';
import { isNumber, sumDigitsOfNumber} from './helper'
import { modifyNumbers} from './actions'
import 'bootstrap/dist/css/bootstrap.css'

class NumberForm extends React.Component {
 
 constructor() {
  super();
  
  this.state = { text:"", error:{ status: false, message:""}};
  this.handleChange = this.handleChange.bind(this);
  this.handleBlur = this.handleBlur.bind(this);
 }
 handleBlur(event) {
 
  if(!this.state.error.status) {
  	
  	//console.log("Nincs hiba");
  	
   this.setState((prevState, props) => ({text: prevState.filteredText}));  	
      
  } else {
   
   //console.log("Hiba van");
   
  }
 
 }
  
 handleChange(event) {
 
   var elements = event.target.value.split(/\s*,\s*/);
   
   var numbers=[]
   var sums=[]
   
   this.setState({text: event.target.value});   
   
   //this.setState((prevState, props) => (Object.assign({}, prevState, {text: event.target.value})));  
   
   var filteredText="";  
   var isError = false;  
   var errorMessage = "";
      
   for(let i=0; i<elements.length; i++) {       
	   
      elements[i] = elements[i].trim();	   
	   
      if(isNumber(elements[i])) {	   
	   
      let number = parseInt(elements[i]);	   
	   
	   numbers.push(parseInt(number,10));
	   
	   sums.push(sumDigitsOfNumber(number));
	  
	   filteredText = numbers.join(", ");
	  
      } else {
          
         isError = true;
         errorMessage="There is problem with " + (i+1) + ". element in the list.";
         
         //if text input empty or contains only spaces
         if(elements[i].length==0&&elements.length==1) {
         
           isError = false;
           errorMessage="";
           this.props.modifyNumbers([], []);
          
         }         
         
    
         else if(elements[i].length==0) {

            errorMessage+="There is more than one commas between numbers , or there are no number after comma. Delete the unnecessary commas";
         
         } else {
         
            errorMessage+=("The wrong element: " + elements[i] + "  A number can contains only digits (0-9) and max one decimal point (.) and must begin digit");
         
         }
        
        break;      
      
      }     
	        	   
	   //store.dispatch(modifyNumbers(numbers, sums));
	   
	   this.props.modifyNumbers(numbers, sums);
   
   }
   
    this.setState((prevState, props) =>({filteredText: filteredText, error: { status: isError, message: errorMessage }}));
    //console.log(isError || this.state.error.status );
    
    //this.setState((prevState, props) =>({error: { status: isError && prevState.error.status }}));  	 
 
 }

 render() {
 
  return (
    
    <form>
    <div className={"form-group" + " " + (this.state.error.status==true?"has-danger":"has-success")}>
    <label htmlFor="numbers" className="form-control-label">Please give a number or sequence of numbers separated commas:</label>
    <textarea className={"form-control" + " " + (this.state.error.status==true?"form-control-danger":"form-control-success")} 
    value={this.state.text} id="numbers" onChange={this.handleChange} onBlur={this.handleBlur}></textarea>
   
    {this.state.error.status&&<div className="form-control-feedback">{this.state.error.message}</div>}
    </div>
    </form>
    
  )
 
 }

};


function mapDispatchToProps(dispatch) {
 
 return {
     modifyNumbers : (numbers, sums) => { dispatch(modifyNumbers(numbers, sums)) }
 }


}

NumberForm = connect(null, mapDispatchToProps)(NumberForm);

export default NumberForm;
