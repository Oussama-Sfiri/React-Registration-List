import React, { Component } from 'react';
import TodoItems from './Components/TodoItems/TodoItems';
import AddItem from './Components/AddItem/AddItem';

export class App extends Component {
  state={
    items : [
      {id : 1, name: 'Hamza', age:22},
      {id : 2, name: 'Ahmed', age:21},
      {id : 3, name: 'Yasser', age:20},
    ],
  };

  deleteItem = (id) => {
    const filteredItems = this.state.items.filter((item) => item.id !== id);
    this.setState({items : filteredItems})
  };

  addItem = (newItem) => {
    const itemsLength = this.state.items.length;
    newItem.id = itemsLength ? this.state.items[itemsLength-1].id + 1 : 1 ;
    const allItems = this.state.items;
    allItems.push(newItem);
    this.setState({items : allItems});
  };

  render() {
    return (
      <div className='App container'>
        <h1 className='text-center'>Registration List</h1>
        <TodoItems items={this.state.items} deleteItem={this.deleteItem}/>
        <AddItem addItem={this.addItem}/>
      </div>
    )
  }
}

export default App;