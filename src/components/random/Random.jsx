import { useEffect, useState } from "react";
import "./random.css";

function Random() {
  const [random, setRandom] = useState([]);

  useEffect(() => {
    getRandom();
  }, []);

  const getRandom = async () => {
    const apiUrl = "https://www.thecocktaildb.com/api/json/v1/1/random.php";
    const api = await fetch(`${apiUrl}`);
    const data = await api.json();
    setRandom(data.drinks);
    console.log(data);
  };

  return (
    <div>
      <h3>Pick a cocktail</h3>
      <div className="random-container">
        {random.map((drink) => {
          return (
            <article key={drink.idDrink} className="random-card">
              <div className="col">
                <div>
                  <h3>{drink.strDrink}</h3>
                </div>
                <div className="random-item-image">
                  <img src={drink.strDrinkThumb} alt={drink.strDrink}></img>
                </div>
              </div>
              <div className="random-recipe col">
                {" "}
                <div className="col col-2">
                  <div className="ingredients">
                    <h4>Ingridients</h4>
                    <div>{drink.strIngredient1}</div>
                    <div>{drink.strIngredient2}</div>
                  </div>
                  <div className="quantity">
                    <h4>Quantity</h4>
                    <div>{drink.strMeasure1}</div>
                    <div>{drink.strMeasure2}</div>
                  </div>
                </div>
                <div>
                  <div className="col">
                    <h4>glass</h4>
                    <div className="category">{drink.strGlass}</div>
                  </div>
                  <div className="col">
                    <h4>Category</h4>
                    <div className="glass">{drink.strCategory}</div>
                  </div>
                  <div className="instructions">{drink.strInstructions}</div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}

export default Random;
