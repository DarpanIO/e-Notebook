import React,{useContext} from 'react'
import noteContext from "../context/notes/noteContext";


export const Noteitem = (props) => {
    const context = useContext(noteContext);
    const { deleteNote } = context;
    const {note} = props;
  return (
    <div className='col-md-3 my-2'>
        <div className="card" style={{width: '18rem'}}>
  <div className="card-body">
    <h5 className="card-title">{note.title}</h5>
    <p className="card-text">{note.description}</p>
    <i className="fa-solid fa-trash-can mx-2" onClick={()=>{deleteNote(note._id)}}></i>
    <i className="fa-solid fa-pen-to-square mx-2"></i>
  </div>
</div>
    </div>
  )
}
export default Noteitem;
