import React from "react";

export default function Post(link, data) {
  let [objarray, setState] = React.useState([]); 

  React.useEffect(() => {
    fetch('https://dan-ror-rest-api.herokuapp.com/api/v1/'+link,
    {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
          'Content-Type': 'application/json'
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(data) // body data type must match "Content-Type" header
    }
    )
      .then(response => response.json())
      .then(object => setState(object))
  }, [])

  return objarray;
}