import { useRef } from "react";
export default function Login(){
return(
    <form onSubmit={handleSubmit(onSuccess, onFailed)}>
            <input ref={userName} name="userName" placeholder="username" {...register("userName", requirments.userName)}></input>
            <small style={{ color: "red" }}>{errors?.userName && errors.userName.message}</small>
            <br></br>
            <input type="password" ref={password} name="password" placeholder="password" {...register("password", requirments.password)}></input>
            <small style={{ color: "red" }}>{errors?.password && errors.password.message}</small>
            <center>
                <button>Submit</button>
            </center>
        </form>
)}