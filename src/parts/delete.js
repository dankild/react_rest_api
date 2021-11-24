import Loader from "./loader";
import MyAlert from "./alert";
import useFetch from "./fetch";

export default function Delete(link){
    let {call_alert} = MyAlert();

    /*let get = useFetch("GET", link);*/
    let answer = useFetch("DELETE", link);

    let page = answer ? call_alert(answer.message) : <Loader />

    return page;
}