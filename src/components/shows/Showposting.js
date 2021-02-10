import React, { Component } from 'react';

class ShowPosting extends Component {
 constructor(props) {
   super(props);
   this.state = {
    editing: false,
    updatedMainChar: ''
   }
 }

 deletePosting = () => {
   this.props.delete(this.props.id);
 }

 editPosting = () => {
   this.setState({
     editing: true
   })
 }

 changenewShowMainCharacter = (event) => {
   this.setState({
     updatedMainChar: event.target.value
   })
 }

update = () => {
  console.log('edited');
  var updatedMainChar = {
    mainchar: this.state.updatedMainChar
  }
  this.props.update(this.props.id, updatedMainChar);
  this.setState({editing: false})
}

 render() {
   var editOptions = null;
   if(this.state.editing) {
     editOptions = (
       <div>
         <input value={this.state.updatedMainChar} onChange={this.changenewShowMainCharacter}/>
        <button onClick={this.update}>Save</button>
       </div>
     )
   }
   else {
     editOptions = (
       <button onClick={this.editPosting} >Edit</button>
     )
   }

   return (
     <div>
       <p>{this.props.show}, {this.props.genre}, {this.props.mainchar}</p>
       <button onClick={this.deletePosting}>Delete</button>
       {editOptions}
     </div>
   )
 }
}
export default ShowPosting;