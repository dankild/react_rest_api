import Form from "../../parts/form";

export default function UserForm(props){
    let myform = (
        <div class="form-floating mb-3">
            <input type="text" class="form-control" id="floatingInput" placeholder="User" required/>
            <label for="floatingInput">User</label>
        </div>
    )
    
    return <Form title={props.action+" User"} form={myform}/>
}