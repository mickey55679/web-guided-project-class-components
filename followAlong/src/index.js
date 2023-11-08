import React from 'react';
import ReactDOM from 'react-dom';

import GroceryList from './components/GroceryList';
import ListForm from './components/ListForm';
import './styles.scss';

const groceries = [
  {
    name: 'Bananas',
    id: 123,
    purchased: false
  },
  {
    name: 'Torillas',
    id: 124,
    purchased: false
  },
  {
    name: 'Milk',
    id: 1235,
    purchased: false
  },
  {
    name: 'Pizza Sauce',
    id: 1246,
    purchased: false
  },
  {
    name: 'Raw Honey',
    id: 1237,
    purchased: false
  },
  {
    name: 'Granola',
    id: 1248,
    purchased: false
  }
];

class App extends React.Component {
  constructor(){
    super(); // calling constructor inside my React.Component class. 
    this.state = {
      groceries: groceries // property pointing to the grocery list above this class, inside this file (look up)
    }
  }
// in classes we have properties and methods, so you can just do this...
  addItem = (e, item) => {
    e.preventDefault(); // this makes sure that if we click on something it doesn't refresh the page.
    const newItem = {
      name: item, // item that we passed into the addItem method 
      id: Date.now(), // gives us a different, random number every single time, this way all the IDs for our items are different
      purchased: false // because when we are adding an item to our list we don't want it to be purchased right away
    }
    //now we need to update our state
    this.setState({...this.state, groceries: [...this.state.groceries, newItem] }) // this will overwrite our whole state object ... makes copy, with this.state we don't actually have to use the spread operator if we do not want to. 
    // we also overwrite groceries, and they are equal to what the groceries were, but we are also adding in our new item as well with the `newItem`
  }

  // Class methods to update state
  render() {
    return (
      <div className="App">
        <div className="header">
           <h1>Shopping List</h1>
           <ListForm />
         </div>
        <GroceryList groceries={this.state.groceries} />
        <button className="clear-btn">Clear Purchased</button>
        {/* <button onClick={(e) => this.addItem(e, 'orange')}>Add orange</button> */ }
       </div>
    );
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);