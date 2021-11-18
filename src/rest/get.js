import React from "react";

export default function Get(link) {
  let [value, setValue] = React.useState(undefined); 
  link = 'https://dan-ror-rest-api.herokuapp.com/api/v1/'+link;

  React.useEffect(() => {
    fetch(link)
      .then(response => response.json())
      .then(object => setValue(object))
      .catch(error => console.log("error:\n"+error))
  })

  return value;
}