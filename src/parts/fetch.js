import { useState, useEffect } from "react";

export default function useFetch(method, link, data=undefined){
    let [value, setValue] = useState(undefined); 

    link = 'https://dan-ror-rest-api.herokuapp.com/api/v1/'+link;
    let headers = {
			method:method.toUpperCase(),
			mode: 'cors',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify(data),
		};

    useEffect(() => {
      async function myfetch(){
          let response = await fetch(link, headers);
          let result = await response.json();
          setValue(result);

					/*console.log(method+": "+JSON.stringify(data)+'\n'+JSON.stringify(result))*/
        }
      myfetch();
    }, [])

    
    return value;
}