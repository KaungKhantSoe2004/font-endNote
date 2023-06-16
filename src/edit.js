import { useEffect } from "react";
import { apiCall } from "./apiCall";
import axios from "axios";
import { useState } from "react";

export default function EditInput({setIsEdit, handleEdit, isEdit}){
    const [value, setValue] = useState(isEdit.note)
  /*   const handleAddNew = async ()=> {
   let num = noteArray.length+1;
        if(inputedValue!==""){
const newObj = {
id: num,
 note: inputedValue,
 userId: 1
}
const tempData = [...noteArray, newObj]
 await apiCall(`http://localhost:3003/notes`, "post", newObj);
loadData();
setInputedValue("")
setIsAddNote(false)
        }
    }*/

    return(
        <div className="inputContainer">
            <input  value={value}  onChange={(e)=> {
             setValue(e.target.value);
            }} placeholder="Edit note"/>
            <button className="save" onClick={()=> {
handleEdit(isEdit, value);
            }}>Save</button>
            <button className="cancel" onClick={()=> {
           setIsEdit(null) 
            }}>Cancel</button>
        </div>
    )
}