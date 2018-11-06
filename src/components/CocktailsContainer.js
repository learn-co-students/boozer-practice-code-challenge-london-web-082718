import React, { Component } from 'react'
import CocktailsList from './CocktailsList'
import CocktailDisplay from './CocktailDisplay'
import Form from './Form'

class CocktailsContainer extends Component {

  state = {
    cocktails: [],
    currentCocktail: null
  }

  getCocktails = () => {
    return fetch('https://react-boozer-backend.herokuapp.com/api/v1/cocktails')
    .then(resp => resp.json())
    .then(resp => this.setState({cocktails: resp}))
  }

  componentDidMount() {
    this.getCocktails()
  }

  setCurrentCocktail = (cocktail) => {
    {this.setState({currentCocktail: cocktail})} 
  }

  render(){
    return (
      <div className="container">
      <CocktailsList cocktails={this.state.cocktails} setCurrentCocktail={this.setCurrentCocktail} />
      <CocktailDisplay cocktail={this.state.currentCocktail}/>
      <Form />
      </div>
      
      
    )
  }
}

export default CocktailsContainer
