import {useState} from "react"
import { FIREBASE_AUTH} from "../FirebaseConfig"
import { createUserWithEmailAndPassword } from "firebase/auth"

function Register(){

    const auth=FIREBASE_AUTH

    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    const[cpassword,setConfirmPassword]=useState("")
    const[message,setMessage]=useState("Please create an account with us today")


    function handleValidation(event){
        event.preventDefault()
        


        if(password==cpassword){
            createUserWithEmailAndPassword(auth,email,password)
            
            setMessage("Hi user with email " + email + " your account has been successfully registered")
            const response="succesfull"

        }
        else{
            setMessage("Sorry, registration failed!")
            const errormsg="error"
            console.log(errormsg)
        }

    }

    return(
        <div className="register">
            <h1>Register page</h1>

            <form>
                <h3>{message}</h3>
                <input type="text" placeholder="Enter a Email" onChange={(event)=>{setEmail(event.target.value)}}/><br />
                <input type="password" placeholder="Create a password" onChange={(event)=>{setPassword(event.target.value)}}/><br />
                <input type="password" placeholder="Confirm password" onChange={(event)=>{setConfirmPassword(event.target.value)}}/><br />

                <button onClick={handleValidation}>Create Account</button>
            </form>
        </div>
    )

}

export default Register