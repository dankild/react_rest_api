export default function Put(link, data) {
    let answer = {};
    link = 'https://dan-ror-rest-api.herokuapp.com/api/v1/'+link;

    fetch(link,
      {
          method: 'PUT', // *GET, POST, PUT, DELETE, etc.
          mode: 'cors', // no-cors, *cors, same-origin
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(data) // body data type must match "Content-Type" header
      }
      )
        .then(response => response.json())
        .then(object => answer = object)
        .catch(error => console.log("error:\n"+error))
  
    return answer;
  }