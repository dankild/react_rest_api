import { useParams } from "react-router-dom";

import Delete from "../../parts/delete";

export default function UserDelete(){
    let { id } = useParams();
    return Delete('users/'+id);
}