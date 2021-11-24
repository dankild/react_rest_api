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
    
    let alert_success = (message) => {
        return <SweetAlert
                success
                title={message}
                onConfirm={end_alert}
                onCancel={end_alert}
                timeout={2000}
            />
    }
    let alert_danger = (message) => {
        return <SweetAlert
                danger
                title={message}
                onConfirm={end_alert}
                onCancel={end_alert}
                timeout={2000}
            />
    }
    
    return {
        alert: () => alert.state ? alert_success(alert.message) : "",
        setter: (state, message) =>  setAlert({state, message}),
        call_alert: alert_success,
        call_danger: alert_danger,
    }
}