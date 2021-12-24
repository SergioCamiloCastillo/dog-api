import { useState, useEffect } from "react/cjs/react.development";
import Card from "./components/Card";
import Error from "./components/Error";
import Select from "./components/Select";
import getDog from "./helpers/getDog";

function App() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [dog, setDog] = useState([]);
  useEffect(() => {
    updateDog(0);
  }, []);

  const updateDog = (breedId) => {
    setLoading(true);
    getDog(breedId)
      .then((newDog) => {
        setDog(newDog);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setError("Error al cargar el perro");
      });
  };

  return (
    <div className="App">
      <Select updateDog={updateDog} />
      {error && <Error error={error} />}
      <Card dog={dog} updateDog={updateDog} loading={loading} />
    </div>
  );
}

export default App;
