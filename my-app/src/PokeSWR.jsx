
import useSWR from "swr";


const fetcher = (url) => fetch(url).then((response) => response.json());

export function PokeSWR(){const { data, error } = useSWR(`https://pokeapi.co/api/v2/pokemon`, fetcher);
  
  return (
    <div>
      {!data && !error && <h1>Loading...</h1>}
      {error && <h1>Sorry there has been an error</h1>}
      {data && !error && (
        <ul>
          {data?.results.map((pokemon) => (
            <li key={pokemon?.name}>
              
              <h1>{pokemon?.name}</h1> <h2></h2> 
            </li>
          ))}
        </ul>
      )}
    </div>
  );}

  

