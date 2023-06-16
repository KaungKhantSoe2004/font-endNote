import { useForm } from "react-hook-form"
import { apiCall } from "./apiCall";
import { useNavigate } from "react-router-dom";
import { setId, setToken, setUser } from "./localStorageFunction";
import axios from "axios";
import { useEffect, useState } from "react";

export const InputAndLogIn = ({isLogin,setIsLogin,setDId})=> {
    const navigate = useNavigate();
    const [data, SetData] = useState([]);

    /*let tempData = apiCall("http://localhost:3003/user", "get");
    console.log(" tempData is", tempData)
    SetData(tempData)
    console.log("data is", data)*/
useEffect(()=> { axios.get("https://kaungkhantsbackendnoteapp.onrender.com/user").then((Response)=> {SetData(Response.data)})}, {})
   console.log(data)
 
    const {register, handleSubmit, watch, formState: {errors}} = useForm();
    let [isReg, setIsReg] = useState(true);
    let ema =    watch("email");
   let pas = watch("password");
   let endpoint = isLogin ? "login": "register";
   console.log(endpoint)


    const submit =async ()=> {
console.log(data)
if(ema,pas){
   if(isReg){

for( let i=0; i< data.length; i++){
   let em =  data[i].email ;
   let pa = data[i].password;
   let id  = data[i].id;
   if(ema===em){
    alert("This Email has already existed. Please use another email");
    return;
   }
}
try{
    let resp = await apiCall(`https://kaungkhantsbackendnoteapp.onrender.com/user`, "post", {
      email: ema,
      password: pas
    });
  setToken(resp.password)
  setUser(resp.email)
  setDId(resp.id)
  setId(resp.id);
 
   console.log("resp is",resp)
      navigate("/")
     
  }

  catch(error){
      alert("Oops, You have already Signed In")
      console.log(error)
}
}

   else{
try{
    let obj = data.filter((eachObj) => ( eachObj.email===ema&&eachObj.password === pas))
    setToken(obj[0].password);
    setUser(obj[0].email);
    setDId(obj[0].id);
    setId(obj[0].id);
    
    navigate('/')
}
catch{
    alert("Round Password")
}
   }
}
    }
   
    return (
        <div className="ialContainer">
            <div className="header">{isReg ? "Register": "Log In"}</div>
<form onSubmit={handleSubmit(submit)} >
    <input className="email" type="email" placeholder="Email Address"{...register("email", {required: true})}/>
    {
        errors.email && <div className="error">Please fill your Email</div>
    }
    <input className="password" type="password"placeholder="Password" {...register("password", {required: true})} />
    {
        errors.password && <div className="error">Please fill your Password</div>
    }
    <button className="btn">{
        isReg ? "Register": "Log In"
    }</button>
</form>
<div className="footer" onClick={()=> {
setIsReg(!isReg)
}}>{
    isReg?" Already Signed in?, Log In" : "Register"
} </div>
        </div>
    )
}


/* try{
        let resp = await apiCall(`http://localhost:3003/user`, "post", {
          email: ema,
          password: pas
        });
      setToken(resp.password)
      setUser(resp.email)
       console.log("resp is",resp)
          navigate("/")
         
      }
  
      catch(error){
          alert("Oops, You have already Signed In")
          console.log(error)
      } */