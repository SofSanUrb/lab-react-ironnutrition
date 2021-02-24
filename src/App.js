import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css'
import Foodsjson from './foods.json';
import FoodBox from './components/FoodBox';
import AddFood from './components/AddFood.js'
import Search from './components/Search';
import Today from './components/Today.js'

class App extends Component {

  state = {
    foods : [],
    filteredFoods: [],
    showForm: false,
    totalFoods: []
  }

  componentDidMount(){
    this.setState({
      foods: Foodsjson,
      filteredFoods: Foodsjson
    })
  }

  handleShowForm = () => {
    this.setState({
      showForm: true
    })
  }

  handleAddForm = (event) => {
    event.preventDefault()

    let name = event.target.name.value
    let calories = event.target.calories.value

    let newFood = {name, calories}

    this.setState({
      showForm: false,
      foods: [newFood, ...this.state.foods],
      filteredFoods: [newFood, ...this.state.filteredFoods]
    })
  }

  handleChange = (event) => {
    let searchText = event.target.value.toLowerCase()

    let filteredList = this.state.foods.filter((singleFood) => {
      return singleFood.name.toLowerCase().includes(searchText)
    })

    this.setState({
      filteredFoods: filteredList
    })
  }

  handleAddItem = (food, quantity) => {
    const {calories} = food
    let AddCalories = quantity * calories
    let myFood = {
      name: food.name,
      calories: AddCalories,
      quantity: quantity
    }

    this.setState({
      totalFoods: [...this.state.totalFoods, myFood]
    })
  }

  handleDelete = (id) => {
    let filteredFoods = this.state.totalFoods.filter(elem => {
      return this.state.totalFoods.indexOf(elem) !== id
    })
    this.setState({
      totalFoods: filteredFoods
    })
    
  }

  render() {
    const {filteredFoods, showForm, totalFoods} = this.state
    return (
      <div>
        <Today items={totalFoods} onDelete={this.handleDelete}/>
        <Search myChange={this.handleChange}/>
        {
          showForm ? <AddFood onAdd={this.handleAddForm}/> : <button onClick={this.handleShowForm}>Add Food</button>
        }
        {
          filteredFoods.map((foodItem, index) => {
            return <FoodBox
              key={index}
              food={foodItem}
              onAdd={this.handleAddItem}
            />
          })
        }
        
      </div>
    );
  }
 
}

export default App;
