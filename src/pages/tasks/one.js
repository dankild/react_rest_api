import React from "react";
import { useParams } from "react-router-dom";

import Loader from "../../parts/loader";
import Buttons from "../../parts/buttons";

let readiness = ['Pending', 'In Progress', 'Done']

export default function Task(){
    let { id } = useParams();
    let [card, setCard] = React.useState(<Loader />)
    let link = 'https://dan-ror-rest-api.herokuapp.com/api/v1/facts/'

    function makeCard(task, user){
        return (
            <div className="card" style={{width: '35rem'}}>
                <div className="card-body">
                    <h5 className="card-title">Task</h5>
                    <p className="card-text">
                        <strong>Assignee:</strong> {user.username} <br/>
                        <strong>Task:</strong> {task.fact} <br/>
                        <strong>Start date:</strong> {task.created_at}
                        <strong>Readiness:</strong> {readiness[task.likes]}
                    </p>
                    <Buttons link={'tasks/'+task.id}/>
                </div>
            </div>
        )
    }

    React.useEffect(() => {
        async function doubleFetch(){
            let taskResponse = await fetch(link+id);
            let userResponse = await fetch(link+task.user_id);
            let task = await taskResponse.json();
            let user = await userResponse.json();
            setCard(makeCard(task, user));
        }
        doubleFetch();
        }, [])
        
    return card;
}

/*React.useEffect(() => {
        fetch(link+id)
        .then(response => response.json())
        .then(task => {
            fetch(link+task.user_id)
            .then(response => response.json())
            .then(user => setCard(makeCard(task, user))
            )
        }
    )
    }, [])*/