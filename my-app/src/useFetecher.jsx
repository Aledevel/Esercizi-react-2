import useSWR from "swr";

export function useFetcher(){
    
    const fetch= username !==null && username !==undefined
    const { data, error, mutate } = useSWR(fetch?`https://api.github.com/users/${username}`: null);
   
    function comevuoi(){
        if(fetch){
            mutate()
        }
      }
    
    return{
        comevuoi,
        data,
        error,
    }

    
}