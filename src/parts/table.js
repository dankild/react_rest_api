import Loader from "./loader";

export default function Table(props){
    return (
        <div>
            <h1>{props.title}</h1>    
            {props.ready() ?
            <table className="table">
                <thead>
                    <tr>
                        {props.head.map((e) => <th>{e}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {props.body()}                     
                </tbody>
            </table>
            :
            <Loader />
            }
        </div> 
    )
}