import React from 'react';
import Header from './components/Header';
import Form from './components/Form';
import RecipesList from './components/RecipesList';

import CategoriesProvider from './context/ContextCategories';
import RecipesProvider from './context/RecipesContext';


function App() {
  return (
    <CategoriesProvider>
      <RecipesProvider>
        <Header />
        <div className="container mr-5">
          <div className="row">
            <Form />
          </div>
          <RecipesList />
        </div>
      </RecipesProvider>
    </CategoriesProvider>
  );
}

export default App;
