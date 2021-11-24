import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SweetAlert from "react-bootstrap-sweetalert";

export default function MyAlert(link){
    let [alert, setAlert] = useState({state:false, message:'', status:''});
    let navigate = useNavigate();
    
    switch (link){
        case 'users/': link = '/users/'; break;
        case 'facts/': link = '/tasks/'; break;
    }
    let end_alert = () => {
        setAlert({state:false})
        navigate(link);
    }
    
    let alert_message = (message) => {
        return <SweetAlert
                success
                title={message}
                onConfirm={end_alert}
                onCancel={end_alert}
                timeout={2000}
            />
    }
    
    return {
        alert: () => alert.state ? alert_message(alert.message) : "",
        setter: (state, message, status) =>  setAlert({state, message, status}),
        call_alert: alert_message,
    }
}