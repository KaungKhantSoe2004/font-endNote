import { useEffect } from "react";
import { apiCall } from "./apiCall";
import axios from "axios";

export default function Input({inputedValue, setInputedValue, setIsAddNote,  noteArray, setNoteArray, loadData, id}){
    const handleAddNew = async ()=> {
   let num = noteArray.length+1;
   let idInNum = Number(id)
        if(inputedValue!==""){
const newObj = {
    userId: idInNum,
 note: inputedValue,
 
}
console.log(newObj)
const tempData = [...noteArray, newObj]
 await apiCall(`https://kaungkhantsbackendnoteapp.onrender.com/notes`, "post", newObj);
console.log(newObj)
loadData();
setInputedValue("")
setIsAddNote(false)
        }
    }
    return(
        <div className="inputContainer">
            <input value={inputedValue}  onChange={(e)=> {
                setInputedValue(e.target.value);
            }}/>
            <button className="save" onClick={()=> {
handleAddNew();
            }}>Save</button>
            <button className="cancel" onClick={()=> {
               setIsAddNote(false) 
            }}>Cancel</button>
        </div>
    )
}