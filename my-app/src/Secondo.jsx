import { useParams } from "react-router-dom"
import { DATA } from "./Database"
export function Secondo(){
    
    const {id} = useParams()
    console.log(id)
    const Dati = DATA.find((obj)=> obj.id === Number(id))
    console.log(Dati)
   return(
   <div>
<h1>{Dati.name}</h1> <img src={Dati.image}/>
<h2>{Dati.price}</h2>

</div>
)
   
}