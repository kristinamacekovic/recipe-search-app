import React, { Component } from "react";

import "./App.css";
import { Form } from "./components/Input";
import { Recipe } from "./components/Recipe";
import { RecipeWrapper } from "./components/RecipeWrapper";
import { getRecipes } from "./api/get-recipes";

class App extends Component {
  state = {
    count: null,
    recipes: [],
  };

  getRecipe = async e => {
    e.preventDefault();
    const searchTerm = e.target.elements.searchTerm.value;
    const recipeList = await getRecipes(searchTerm);
    this.setState({
      count: recipeList.count,
      recipes: recipeList.recipes,
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-Title">Search for a recipe:</h1>
        </header>
        <Form getRecipe={this.getRecipe} />
        <RecipeWrapper>
          {this.state.recipes.map(recipe => (
            <Recipe key={recipe.recipe_id} recipe={recipe} />
          ))}
        </RecipeWrapper>
      </div>
    );
  }
}

export default App;
