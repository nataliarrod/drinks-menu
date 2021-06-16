import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const RecipesContext = createContext();

const RecipesProvider = (props) => {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState({
    name: "",
    category: "",
  });
  const [consult, setConsult] = useState(false);
  const {name,category} = search;

  useEffect(() => {
    if(consult) {
      const getRecipes = async () => {
        const url =`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${name}&c=${category}`
        const result = await axios.get(url);
        setRecipes(result.data.drinks);
        console.log('result', result);
      }
      getRecipes();
    }
  }, [search]);

  return (
    <RecipesContext.Provider
      value={{
        recipes,
        setSearch,
        setRecipes,
        setConsult,
      }}
    >
      {props.children}
    </RecipesContext.Provider>
  );
};

export default RecipesProvider;
