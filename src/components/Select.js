import { useState, useEffect } from "react";
import getBreeds from "../helpers/getBreeds";
import Error from "./Error";

export default function Select({ updateDog }) {
  const [breeds, setBreeds] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    updateBreeds();
  }, []);

  const updateBreeds = () => {
    getBreeds()
      .then((newBreeds) => {
        setBreeds(newBreeds);
      })
      .catch((error) => {
        console.log(error);
        setError("Error al cargar las razas.");
      });
  };
  return (
    <div className="select">
      <select onChange={(e) => updateDog(e.target.value)}>
        {breeds.map((item) => (
          <option key={item.id} value={item.id} id={item.id}>
            {item.name}
          </option>
        ))}
      </select>
      {error && <Error error={error} />}
    </div>
  );
}
