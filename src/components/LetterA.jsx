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
    setLetterA(data.drinks);
  };

  return (
    <div>
      {letterA.map((drink) => {
        return (
          <div key={drink.idDrink}>
            <p>{drink.strDrink}</p>
          </div>
        );
      })}
    </div>
  );
}

export default LetterA;
