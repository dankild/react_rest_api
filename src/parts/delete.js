import React from "react";

import Loader from "./loader";
import MyAlert from "./alert";
import useFetch from "./fetch";

export default function Delete(link, id){
    let {call_alert} = MyAlert(link);

    let answer = useFetch("DELETE", link+id);

    let page = answer ? call_alert(answer.message) : <Loader />

    return  page
}