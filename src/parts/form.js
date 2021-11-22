async function myfetch(event, method, link, data){
    event.preventDefault();
    link = 'https://dan-ror-rest-api.herokuapp.com/api/v1/'+link;
    let headers = {
        method: method.toUpperCase(),
        mode: 'cors',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data),
    };

    console.log('to: '+link+'\n'+headers.method+': '+headers.body);
    
    let response = await fetch(link, headers);
    response = await response.json()
    alert(response.message)
}

export default function Form(method, title, link, inner_form, data){
let form = (
    <form className="wrapper text-center" 
        onSubmit={e => myfetch(e, method, link, data)}>
        <h1>{title}</h1><br/>

        {inner_form}

        <br/><br/>
        <input type="submit" value={title}
            className="btn btn-primary align-center"/>
    </form>
)

    return form;
}