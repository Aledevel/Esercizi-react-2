import {  Link, Route, Routes } from "react-router-dom"
import { Beautiful } from "./Beautiful"
import { Secondo } from "./Secondo"
import { Primo } from "./Primo"
import { Pokefetcher} from "./Terzapagina"
import { PokeSWR } from "./PokeSWR"
import { FetchSwr } from "./SWRfetcher"
export function App(){
    return(
        <div>
            <Link to="/terzapagina" >Pokefetcher</Link>|
         <Link to="/beautiful">Beautiful</Link>|
         <Link to="/primo"> primo</Link>|
         <Link to="/pokeSwr"> FetchSWR</Link>|
         <Link to="/swr">Github User</Link>|
         <Routes>
            <Route path="beautiful" element={<Beautiful/>}/>
            <Route path="primo" element={<Primo/>}/>
            <Route path="secondo/:id" element={<Secondo/>}/>
            <Route path="/terzapagina" element={<Pokefetcher/>}/>
            <Route path="pokeSwr" element={<PokeSWR/>}/>
            <Route path="/swr" element={<FetchSwr/>}/>
         </Routes>
        </div>
    )

}