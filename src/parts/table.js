import Loader from "./loader";

export default function Table(props){
    let title = () => {
        if (props.button.state){
            return(
            <div className="d-flex justify-content-between">
                <div><h1>{props.title}</h1></div>  
                <div> 
                    <a href={props.button.link} className="btn btn-outline-primary" role="button">
                        Create {props.button.text}
                    </a>
                </div>  
            </div>
            )
        } else {
            return (<h1>{props.title}</h1>)
        }
    }

    return (
        <div>
                {title()}
                <table className="table">
                    <thead>
                        <tr>
                            {props.head.map((e) => <th key={e}>{e}</th>)}
                        </tr>
                    </thead>
                    <tbody>
                        {props.ready ? props.body() : <Loader />}                     
                    </tbody>
                </table>
        </div> 
    )
}