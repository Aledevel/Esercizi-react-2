import { Link } from "react-router-dom";
import { DATA } from "./Database";
export function Primo() {
  return (
    <div>
      <h1>Secondo</h1>
      {DATA.map((obj) => (
        <div key={obj.id}>
         <img src={obj.image} alt="immagine" width={300} /> 
          <div>{obj.name}</div> 
          <Link to={`/secondo/${obj.id}`}>details</Link>
        </div>
      ))}
    </div>
  );
}
