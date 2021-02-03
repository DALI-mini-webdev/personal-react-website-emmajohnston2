import React, { Component } from 'react';

class ShowPosting extends Component {
 constructor(props) {
   super(props);
   this.state = {};
 }
 render() {
   return (
     <div>
       <p>{this.props.name}, {this.props.show}</p>
       <p>{this.props.name}, {this.props.genre}</p>
       <p>{this.props.name}, {this.props.mainchar}</p>
     </div>
   )
 }
}
export default ShowPosting;

