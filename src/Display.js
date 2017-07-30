import React from 'react';
import { connect } from 'react-redux'

class Display extends React.Component {

 constructor() {
   super();
 }
 
 render() {
 
   return (
    <div>
    <h2>Sums of digits of numbers</h2>
    <div>{this.props.sums}</div>
    </div>
   );
 
 }


}


function mapStateToProps(state) {
  return { sums: state.sums.join(", ") }
}

Display = connect(mapStateToProps)(Display);

export default Display;