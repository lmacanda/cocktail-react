import { useEffect, useState } from "react";

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

export default LetterA;
