import { useState } from 'react';
import { Router } from "@reach/router";

import Recipes from "./Recipes";
import Recipe from "./Recipe";

function App() {
  const [recipes, setRecipes] = useState([
    { id: 1, title: 'Pizza 1', description: "Pizza is nice 1" },
    { id: 2, title: 'Pizza 2', description: "Pizza is nice 2" },
    { id: 3, title: 'Pizza 3', description: "Pizza is nice 3" },
  ]);

  function getRecipe(id) {
    return recipes.find(recipe => recipe.id === parseInt(id));
  }

  return (
    <>
      <h1>Cooking Recipes</h1>

      <Router>
        <Recipes path="/" data={recipes}></Recipes>
        <Recipe path="/recipe/:id" getRecipe={getRecipe} ></Recipe>
      </Router>
    </>
  );
}

export default App;
