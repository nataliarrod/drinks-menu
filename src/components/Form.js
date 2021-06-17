import React, { useContext, useState } from "react";
import { CategoriesContext } from "../context/ContextCategories";
import { RecipesContext } from "../context/RecipesContext";

const Form = () => {
  const [search, setSearch] = useState({
    name: "",
    category: "",
  });

  const { categories } = useContext(CategoriesContext);
  const { setSearchContext, setConsult } = useContext(RecipesContext);

  const getDataRecipe = (e) => {
    setSearch({
      ...search,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form
      className="col-12"
      onSubmit={(e) => {
        e.preventDefault();
        setSearchContext(search);
        setConsult(true);
      }}
    >
      <fieldset className="text-center">
        <legend>Search drinks for categories or ingredients</legend>
      </fieldset>

      <div className="row mt-4">
        <div className="col-md-4">
          <input
            name="name"
            className="form-control"
            type="text"
            placeholder="Search for an ingredient"
            onChange={getDataRecipe}
          />
        </div>
        <div>
          <select
            className="form-control"
            name="category"
            onChange={getDataRecipe}
          >
            <option value="">--Select a category--</option>
            {categories.map((category) => (
              <option key={category.strCategory} value={category.strCategory}>
                {category.strCategory}
              </option>
            ))}
          </select>
        </div>
        <div className="col-md-4">
          <input
            type="submit"
            className="btn btn-block btn-primary"
            value="Search for drinks"
          />
        </div>
      </div>
    </form>
  );
};

export default Form;
