import logo from './logo.svg';
import "./index.css"
import './App.css';
import { BrowserRouter, Route ,Routes, useNavigate} from 'react-router-dom';
import NavBar from './navBar';

import { useEffect, useState } from 'react';
import Input from './input';
import { NoteData } from './mock/noteArray';
import EachNote from './eachNote';
import { apiCall } from './apiCall';
import axios from 'axios';
import EditInput from './edit';
import { getId, getToken, getUser, removeId, removeToken, removeUser,  } from './localStorageFunction';

function App({isLogin,setIsLogin, id, setId}) {
  console.log(id)
const navigate = useNavigate()
 const [isEdit, setIsEdit] = useState(null);
  const [inputedValue, setInputedValue] = useState("");
  const [isAddNote, setIsAddNote] = useState(false);
  let [noteArray, setNoteArray] = useState(NoteData);
  getUser("note_app_user")
 let [userName, setUserName] = useState(getUser("note_app_user"));
 console.log(userName)
//setNoteArray(NoteData);
//isLogin && navigate("/login")
useEffect(
  ()=> {
    const token=  getToken();
    if(!token){
      navigate('/login')
    }  
  }, {}
) 


const loadData =async ()=> {
/*await  axios.get(`http://localhost:3003/notes`).then((Response)=> setNoteArray(Response.data))*/
await axios.get(`https://kaungkhantsbackendnoteapp.onrender.com/user/${id}?_embed=notes`).then((Response)=> setNoteArray(Response.data.notes))

};

useEffect(()=> {
  loadData()
}, [])
const handleEdit =async (isEdit, value)=> {
  console.log(isEdit)
  await apiCall(`https://kaungkhantsbackendnoteapp.onrender.com/notes/${isEdit.id}`, "put", {...isEdit, note: value})
  loadData();
  setIsEdit(null)
}
  return (
<div className='App'>
  <h1>Note App For {userName}</h1>
  <button className='logOut' onClick={()=> {
    removeToken();
    removeUser();
    navigate("/login");
    removeId();
  }}>Log Out</button>
<div className='body'>
<div className='container'>
{
  isAddNote ? <Input id={id} loadData={loadData} inputedValue={inputedValue} noteArray={noteArray} setNoteArray={setNoteArray} setInputedValue={setInputedValue} setIsAddNote={setIsAddNote}/>: <button className="addNote" onClick={()=> {setIsAddNote(true)}}>Add Note</button>
}
{
  isEdit && <EditInput setIsEdit={setIsEdit} handleEdit={handleEdit} isEdit={isEdit}/>
}
<ul className='ansContainer'>
  
{
  noteArray.map((eachNote, index)=> (
<EachNote eachNote={eachNote.note} key={index} count={index+1} en ={eachNote} loadData={loadData} setIsEdit={setIsEdit} handleEdit={handleEdit}/>

  ))
}
</ul>
</div>
</div>
</div>
  )
}

export default App;
