
import { useFetcher } from "react-router-dom";


export function FetchSwr() {
    
  const {comevuoi, data, error}= useFetcher()


  return (
    <div>
        <input type="text" onChange={Handleinput} />
        <button onClick={comevuoi}>refresh</button>
      <ul>
        {data &&!error && data.map((user) => <li key={user.login}>{user.login}</li>)}
      </ul>
    </div>
  );
}
