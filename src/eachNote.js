import axios from "axios";
import { apiCall } from "./apiCall";

export default function EachNote({eachNote, count, en, loadData, setIsEdit, handleEdit}){
  const handleDelete = async ()=> {
    console.log(en.id)
 await apiCall(`https://kaungkhantsbackendnoteapp.onrender.com/notes/${en.id}`, "delete");
// axios.delete(`http://localhost:3003/notes/${en.id}`)
loadData();
  }
 /* const handleEdit =async ()=> {
  await apiCall(`http://localhost:3003/notes` , "put", {eachNote: "ok"})

  }*/
    return(
       <div className="eachNoteContainer">
         <div className="eachNote">{count}.{eachNote}</div>
        <div className="btnCon">
        <button className="delete" onClick={()=> {
          handleDelete();
        }}>Delete</button>
         <button className="edit" onClick={()=> {
          setIsEdit(en)
     
         }}>Edit</button>
        </div>
       </div>
    )
}