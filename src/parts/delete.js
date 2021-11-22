import useFetch from "./fetch";
import Loader from "./loader";

export default function Delete(link){
    let get = useFetch("GET", link);
    let answer = useFetch("DELETE", link);

    let page = <Loader />
    if (get && answer){
        page = (
            <>
                <p>{answer.message}</p>
            </>
        )
    } 

    return page;
}