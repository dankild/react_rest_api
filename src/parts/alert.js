import { useState } from "react";
import SweetAlert from "react-bootstrap-sweetalert";

export default function MyAlert(){
    let [alert, setAlert] = useState({state:false, message:'', status:''});
    
    let alert_message = (message) => {
        if (alert.status == 200){
            return <SweetAlert
                success
                title={message}
                onConfirm={() => setAlert({state:false})}
                onCancel={() => setAlert({state:false})}
                timeout={2000}
            />
        } else {
            return <SweetAlert
                danger
                title={message}
                onConfirm={() => setAlert({state:false})}
                onCancel={() => setAlert({state:false})}
                timeout={2000}
            />
        }
    }
    

    return {
        alert: () => alert.state ? alert_message(alert.message) : "",
        setter: (state, message, status) =>  setAlert({state, message, status}),
        call_alert: alert_message,
    }
}