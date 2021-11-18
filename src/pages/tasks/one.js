import React from "react";
import { useParams } from "react-router-dom";

import Loader from "../../parts/loader";
import Buttons from "../../parts/buttons";

export default function Task(){
    let { id } = useParams();
    let [card, setCard] = React.useState(<Loader />)
    
    React.useEffect(() => {
        fetch('https://dan-ror-rest-api.herokuapp.com/api/v1/facts/'+id)
        .then(response => response.json())
        .then(task => {
            fetch('https://dan-ror-rest-api.herokuapp.com/api/v1/users/'+task.user_id)
            .then(response => response.json())
            .then(user => setCard(
            <div className="card" style={{width: '35rem'}}>
                <div className="card-body">
                    <h5 className="card-title">Task</h5>
                    <p className="card-text">
                        <strong>Assignee:</strong> {user.username} <br/>
                        <strong>Task:</strong> {task.fact} <br/>
                        <strong>Start date:</strong> {task.created_at}
                    </p>
                    <Buttons link={'tasks/'+task.id}/>
                </div>
            </div>
            )
            )
        }
    )
    })
        
    return card;
}