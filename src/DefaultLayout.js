import { BrowserRouter, Routes, Route } from "react-router-dom"
import { InputAndLogIn } from "./inputAndLogIn"
import App from "./App"
import { useState } from "react"
export const DefaultLayout = ()=> {
    let di = localStorage.getItem("note_app_id");

    const [isLogin, setIsLogin] = useState(false);
const [id, setDId]= useState(di);

    return(
     
         <BrowserRouter>
<Routes>
  <Route path='logIn' element={<InputAndLogIn isLogin={isLogin} setIsLogin={setIsLogin} setDId={setDId}/>}></Route>
  <Route path="/" element={<App isLogin={isLogin} setIsLogin={setIsLogin} setId={setDId} id={id}/>}></Route>
</Routes>
</BrowserRouter>
      
    )
}