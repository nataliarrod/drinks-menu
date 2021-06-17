import React from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import RecipesList from "./components/RecipesList";

import CategoriesProvider from "./context/ContextCategories";
import RecipesProvider from "./context/RecipesContext";
import ModalProvider from "./components/ModalContext";

function App() {
  return (
    <CategoriesProvider>
      <RecipesProvider>
        <ModalProvider>
          <Header />
          <div className="container mr-5">
            <div className="row">
              <Form />
            </div>
            <RecipesList />
          </div>
        </ModalProvider>
      </RecipesProvider>
    </CategoriesProvider>
  );
}

export default App;
