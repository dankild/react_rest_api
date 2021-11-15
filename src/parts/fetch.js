import React from "react";

export default function FetchObjs(link) {
  let [objarray, setState] = React.useState([]); 

  React.useEffect(() => {
    fetch('https://dan-ror-rest-api.herokuapp.com/api/v1/'+link)
      .then(response => response.json())
      .then(object => setState(object))
  }, [])

  return objarray;
}