import React, { useContext, useState } from "react";
import { ModalContext } from "./ModalContext";

import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 450,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const RecipeCard = ({ recipe }) => {
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);

  const classes = useStyles();

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const { recipeContext, setidRecipe, setrecipeContext } =
    useContext(ModalContext);

  const showIngredients = (recipeContext) => {
    let ingredients = [];
    for (let i = 1; i < 16; i++) {
      if (recipeContext[`strIngredient${i}`]) {
        ingredients.push(
          <li>
            {" "}
            {recipeContext[`strIngredient${i}`]} {recipeContext[`strMeasure${i}`]}
          </li>
        );
      }
    }
    return ingredients;
  };

  return (
    <div className="col-md-4 mb-3">
      <div className="card">
        <h2 className="card-header">{recipe.strDrink}</h2>
        <img
          className="card-img-top"
          src={recipe.strDrinkThumb}
          alt={`Imagen de ${recipe.strDrink}`}
        />
        <div className="card-body">
          <button
            type="button"
            className="btn btn-block btn-primary"
            onClick={() => {
              setidRecipe(recipe.idDrink);
              setrecipeContext({});
              handleOpen();
            }}
          >
            See Recipe
          </button>
          <Modal
            open={open}
            onClose={() => {
              setidRecipe(null);
              handleClose();
            }}
          >
            <div style={modalStyle} className={classes.paper}>
              <h2>{recipeContext.strDrink}</h2>
              <h3 className="mt-4">Instructions:</h3>
              <p>{recipeContext.strInstructions}</p>
              <img
                className="img-fluid my-4"
                src={recipeContext.strDrinkThumb}
              />
              <h3>Ingredients and Quantities</h3>
              <ul>{showIngredients(recipeContext)}</ul>
            </div>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
