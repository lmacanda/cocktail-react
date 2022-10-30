import { useEffect, useState } from "react";
import "./letterA.css";

function LetterA() {
  const [letterA, setLetterA] = useState([]);

  useEffect(() => {
    getLetterA();
  }, []);

  const getLetterA = async () => {
    const apiUrl = "https://thecocktaildb.com/api/json/v1/1/search.php?f=a";
    const api = await fetch(`${apiUrl}`);
    const data = await api.json();
    console.log(data);
    setLetterA(data.drinks);
  };

  return (
    <div className="letterA-container">
      {letterA.map((drink) => {
        return (
          <article key={drink.idDrink} className="cocktail-card">
            <div className="cocktail-name">
              <h3>{drink.strDrink}</h3>
            </div>
            <div className="letterA-item-image">
              <img src={drink.strDrinkThumb} alt={drink.strDrink}></img>
            </div>
          </article>
        );
      })}
    </div>
  );
}

export default LetterA;
