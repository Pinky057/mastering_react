import React,{useEffect,useState} from 'react';
import './App.css';
import Recipe from "./Recipe";

const App=()=> {
  const APP_ID ="b2b58825";
  const APP_KEY="ebf26e3ba916ec070e0726d80e082c23";
  //const exampleReq=`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

  const [recipes, setRecipes]=useState([]);

  useEffect(()=>{
 getRecipes();
  },[]);

  const getRecipes=async ()=>{
    const response= await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`);
   const data=await response.json();
   setRecipes(data.hits);
  }


  return (
      <div className="App">
        <form className="search-bar">
          <input className="search-bar" type="text"/>
          <button className="search-button" type="submit">Search</button>
        </form>
        {recipes.map(recipe=>(
            <Recipe
                key={recipe.recipe.label}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            />
        ))}
      </div>
  );
}

export default App;
