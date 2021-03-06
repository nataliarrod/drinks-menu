import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const RecipesContext = createContext();

const RecipesProvider = (props) => {
  const [recipes, setRecipes] = useState([]);
  const [searchContext, setSearchContext] = useState({
    name: "",
    category: "",
  });
  const [consult, setConsult] = useState(false);
  const { name, category } = searchContext;

  useEffect(() => {
    if (consult) {
      const getRecipes = async () => {
        const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${name}&c=${category}`;
        const result = await axios.get(url);
        setRecipes(result.data.drinks);
      };
      getRecipes();
    }
  }, [searchContext]);

  return (
    <RecipesContext.Provider
      value={{
        recipes,
        setSearchContext,
        setRecipes,
        setConsult,
      }}
    >
      {props.children}
    </RecipesContext.Provider>
  );
};

export default RecipesProvider;
