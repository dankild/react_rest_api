import MyAlert from "./alert";

async function submitHandler(event, method, link, data, setter){
    event.preventDefault();

    link = process.env.REACT_APP_BACKEND_SERVER_ADDRESS+link;
    let headers = {
        method: method.toUpperCase(),
        mode: 'cors',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data),
    };

    console.log('to: '+link+'\n'+headers.method+': '+headers.body);
    
    let response1 = await fetch(link, headers);
    let response2 = await response1.json();
    console.log(JSON.stringify(response1))
    setter(true, response2.message)
}

export default function Form(method, title, link, inner_form, data){
    let {alert, setter} = MyAlert();

    let form = (
        <form className="wrapper text-center" 
            onSubmit={(e) => {
                submitHandler(e, method, link, data, setter)
            }}>
            {alert()}
            <h1>{title}</h1><br/>

            {inner_form}

            <br/><br/>
            <input type="submit" value={title}
                className="btn btn-primary align-center"/>
        </form>
)

    return form;
}