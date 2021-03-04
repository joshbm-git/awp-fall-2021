import { useState, useEffect } from 'react';
import { Router } from "@reach/router";

import Recipes from "./Recipes";
import Recipe from "./Recipe";

/*
const data = [
  { id: 1, title: 'Pizza 1', description: "Pizza is nice 1" },
  { id: 2, title: 'Pizza 2', description: "Pizza is nice 2" },
  { id: 3, title: 'Pizza 3', description: "Pizza is nice 3" },
];
*/

function App() {
  //const [recipes, setRecipes] = useState(data);
  const [recipes, setRecipes] = useState([]);

  useEffect(() => { 
    const fetchData = async () => {
      const url = "https://krdo-cooking-api.herokuapp.com/api/cooking";
      const response = await fetch(url);
      const data = await response.json();
      setRecipes(data);
    }; 
    fetchData();
  }, []); 
  
  function getRecipe(id) {
    return recipes.find(recipe => recipe.id === parseInt(id));
  }

  function addRecipe(title, desc, ingredients) {
    console.log(title, desc, ingredients);

    const data = { 
      title: title, 
      description: desc,
      ingredients: ingredients    
    };
    const postData = async () => {
      const url = "https://krdo-cooking-api.herokuapp.com/api/cooking";
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      const reply = await response.json();
      console.log(reply);

    }; 
    postData();
  }

  return (
    <>
      <h1>Cooking Recipes</h1>

      <Router>
        <Recipes path="/" data={recipes} addRecipe={addRecipe} ></Recipes>
        <Recipe path="/recipe/:id" getRecipe={getRecipe} ></Recipe>
      </Router>
    </>
  );
}

export default App;
