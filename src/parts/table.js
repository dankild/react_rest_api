import Loader from "./loader";

export default function Table(props){
    return (
        <div>
            {props.ready ?
            <>
                <h1>{props.title}</h1>    
                <table className="table">
                    <thead>
                        <tr>
                            {props.head.map((e) => <th key={e}>{e}</th>)}
                        </tr>
                    </thead>
                    <tbody>
                        {props.body()}                     
                    </tbody>
                </table>
            </>
            :
            <Loader />
            }
        </div> 
    )
}