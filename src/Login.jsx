import {useState} from "react"
import { FIREBASE_AUTH} from "../FirebaseConfig"
import { signInWithEmailAndPassword } from "firebase/auth"
import {useNavigate} from "react-router-dom"

function Login(){

    const navigate=useNavigate()

    const auth=FIREBASE_AUTH

    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    const[cpassword,setConfirmPassword]=useState("")
    const[message,setMessage]=useState("Sign In now")


    function signIn(event){
        event.preventDefault()
        if(password==cpassword){
            signInWithEmailAndPassword(auth,email,password)
                
        setMessage("login successful!") 
        setTimeout(()=>{
            navigate("/products")
        },4000)  
            
        }
        else{
            setMessage("Authentication Failed!")
        }
        
    }

    return(
        <div className="login">
            <h1>Login page</h1>

            <form>
                <h3>{message}</h3>
                <input type="text" placeholder="Enter a Email" onChange={(event)=>{setEmail(event.target.value)}}/><br />
                <input type="password" placeholder="Create a password" onChange={(event)=>{setPassword(event.target.value)}}/><br />
                <input type="password" placeholder="Confirm password" onChange={(event)=>{setConfirmPassword(event.target.value)}}/><br />

                <button onClick={signIn}>Login</button>
            </form>
        </div>
    )

}

export default Login