import { useEffect, useState } from "react";

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
  };

  return (
    <div className="random-container">
      {random.map((drink) => {
        return (
          <article key={drink.idDrink} className="cocktail-card">
            <div className="letterA-item-image">
              <img src={drink.strDrinkThumb} alt={drink.strDrink}></img>
            </div>
            <h3>{drink.strDrink}</h3>
          </article>
        );
      })}
    </div>
  );
}

export default Random;
