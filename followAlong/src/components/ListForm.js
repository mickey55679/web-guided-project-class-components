import React, {useState} from "react";

class ListForm extends React.Component {
  // Constructor with state
  // you could put props in the constructor and super to be able to refer to properties inside of this component by using this.props
  // remember.. how we refer to properties within classes is using this.props
  // this project we are not using props
  // state inside a class component is a little different than inside of a functional component, 
  // we use this.state, and state is going to be a property inside this class
  constructor(){
    super();
    // below we are referring to the state property of my ListForm class
    this.state = {
      item: ''
    }
  }


  handleChanges = e => {
    // update state with each keystroke
    e.preventDefault();
    this.setState({...this.state, item: e.target.value})
  };

  // class property to submit form
  submitForm = e => {
    e.preventDefault();
    this.props.addItem(e, this.state.item);
    this.setState({...this.state, item: ''});
  }

  render() { // have to use render method in classes
    return (
      <form onSubmit={this.submitForm}>
        {/* This is an uncontrolled component 😬 We want it to be controlled by state */}
        <input type="text" name="item" value={this.state.item} onChange={this.handleChanges} />
        <button>Add</button>
      </form>
    );
  }
}

export default ListForm;


//This is an example of a class component

