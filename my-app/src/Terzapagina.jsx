import { useEffect, useState } from "react";

export function Pokefetcher() {
  const [input, setInput] = useState(null);
  const [pokemon, setPokemon] = useState(null);
  const [Loading, Setloading] = useState(false);

  function HandleInputChange(event) {
    event.preventDefault();
    const value = event.target.value;
    setInput(value);
  }

  async function Fetch(e) {
    e.preventDefault();
    try {
      const call = await fetch(`https://pokeapi.co/api/v2/pokemon/${input}`);
      const response = await call.json();
      Setloading(true);
      console.log(response);
      setPokemon(response);
    } catch (Error) {
      console.log(Error);
    } finally {
      Setloading(false);
    }
  }
  useEffect(() => {}, [pokemon]);

  return (
    <div>
      <form onSubmit={Fetch}>
        <input type="text" onChange={HandleInputChange} />
        <button>Catch'em All </button>
      </form>
      <div>
        {Loading && <h1>Loading...</h1>}
        {pokemon &&  (
          <div key={pokemon.id}>
            <img src={pokemon?.sprites?.front_default} />{" "}
            <h1>{pokemon?.name}</h1> <h2>{pokemon?.types[0]?.type?.name}</h2>
          </div>
        )}
      </div>
    </div>
  );
}
