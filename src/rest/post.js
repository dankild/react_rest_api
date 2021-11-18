export default function Post(link, data) {
  let answer = {}

  fetch('https://dan-ror-rest-api.herokuapp.com/api/v1/'+link,
    {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
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