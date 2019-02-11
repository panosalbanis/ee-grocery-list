import React, { Component } from 'react';
import GroceryLists from './components/GroceryLists/GroceryLists';
import GroceryList from './components/GroceryList/GroceryList';
import AddGroceryList from './components/AddGroceryList/AddGroceryList';
import {
  getGroceryLists,
  getGroceryList,
  addGroceryList,
  addItem
} from './apiCalls';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      groceryLists: [],
      currentGroceryList: {}
    };
    this.groceryListSelectedHandler = this.groceryListSelectedHandler.bind(
      this
    );
    this.updateGroceryLists = this.updateGroceryLists.bind(this);
    this.addGroceryListHandler = this.addGroceryListHandler.bind(this);
    this.addItemHandler = this.addItemHandler.bind(this);
  }
  async componentDidMount() {
    await this.updateGroceryLists();
  }

  async groceryListSelectedHandler(id) {
    await this.updateGroceryList(id);
  }

  async addGroceryListHandler() {
    await addGroceryList();
    await this.updateGroceryLists();
  }

  async addItemHandler(listId, name, quantity) {
    await addItem(listId, name, quantity);
    await this.updateGroceryList(listId);
  }

  async updateGroceryLists() {
    const groceryLists = await getGroceryLists();
    this.setState({ groceryLists });
  }

  async updateGroceryList(id) {
    const currentGroceryList = await getGroceryList(id);
    this.setState({ currentGroceryList });
  }

  render() {
    return (
      <div className="groceryListContainer">
        <div className="groceryLists">
          <GroceryLists
            lists={this.state.groceryLists}
            groceryListSelectedHandler={this.groceryListSelectedHandler}
          />
          <AddGroceryList handleClick={this.addGroceryListHandler} />
        </div>
        <div className="currentGroceryList">
          <GroceryList
            list={this.state.currentGroceryList}
            addItemHandler={this.addItemHandler}
          />
        </div>
      </div>
    );
  }
}

export default App;
