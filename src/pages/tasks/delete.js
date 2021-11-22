import { useParams } from "react-router-dom";

import Delete from "../../parts/delete";

export default function TaskDelete(){
    let { id } = useParams();
    return Delete('facts/'+id);
}