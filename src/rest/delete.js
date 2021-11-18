export default function Delete(link) {
    let answer = {};
    link = 'https://dan-ror-rest-api.herokuapp.com/api/v1/'+link;

    fetch(link,
      {
          method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
          mode: 'cors', // no-cors, *cors, same-origin
        }
      )
        .then(response => {answer = response.statusText; console.log(answer)})
        .catch(error => console.log("error:\n"+error))
  
    return answer;
  }