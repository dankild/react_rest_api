import Loader from "./loader";

export default function Table(props){
    let title = () => {
        if (props.button.state){
            return(
                <div className="d-flex justify-content-between">
                    <h1>{props.title}</h1> 
                    <a href={props.button.link} className="btn btn-outline-primary align-bottom" role="button">
                        Create {props.button.text}
                    </a>
                </div>  
            )
        } else {
            return (<h1>{props.title}</h1>)
        }
    }
    return (
        <div>
            {props.ready ?
            <>  
                {title()}
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