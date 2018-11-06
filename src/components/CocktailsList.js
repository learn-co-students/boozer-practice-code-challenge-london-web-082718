import React, { Component } from 'react'
import Cocktail from './Cocktail'

class CocktailsList extends Component {
  render(){
    return (
      <div id="cocktail-list">
      <ul>
       {this.props.cocktails.map(cocktail => <Cocktail cocktail={cocktail} setCurrentCocktail={this.props.setCurrentCocktail}/>)}
      </ul>
      </div>
    )
  }
}

export default CocktailsList
