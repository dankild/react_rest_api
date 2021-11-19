import { useState, useEffect } from "react";
import AlertContext from '../App';

export default function useFetch(method, link, data=undefined, alertState=false){
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

					console.log(method+": "+JSON.stringify(data)+'\n'+JSON.stringify(result))
          if (alertState){
						<AlertContext.Consumer>
							{value => {
								value({state:true, type:'success', text:result.message})
								setTimeout(() => 	value({state:false}), 5000)}}
						</AlertContext.Consumer>
          }
        }
      myfetch();
    }, [])

    
    return value;
}