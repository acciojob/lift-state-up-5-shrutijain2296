import React, { useState } from "react";
import Child from "./Child";

const Parent = () =>{

    let[isLoggedIn, setIsLoggedIn] = useState(false);
    let[userName, setUserName] = useState("");
    let[password, setPassword] = useState("");

    function clickAction(){
        if(userName && password){
            setIsLoggedIn(true);
        }   
    
    }


    return(
        <div className="parent">
            <h1>Parent Component</h1>
            {
                isLoggedIn ?  (  //this means is the value of isLoggedIn is true the show child component
                    <Child />
                ):(
                    <div>
                         <label htmlFor = "userName">Username: </label>
                        <input type = "text" value = {userName} onChange = {(event) => setUserName(event.target.value)} />
                        <label htmlFor = "password">Password: </label>
                        <input type = "password" value = {password} onChange={(event) => setPassword(event.target.value)} />
                        <button onClick = {clickAction}>Login</button>
                    </div>
                   
                )
            }
          
           
        </div>
    )
}
export default Parent;