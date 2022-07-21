import React, { useContext,useEffect,useRef,useState } from "react";
import noteContext from "../context/notes/noteContext";
import { AddNote } from "./AddNote";
import { Noteitem } from "./Noteitem";

export const Notes = () => {
    const context = useContext(noteContext);
    const { notes, getNotes,editNote } = context;
    
    const [note, setNote] = useState({id:"" ,etitle: "", edescription: "",etag: ""})
    useEffect(() => {
      getNotes()
    }, [])
    const updateNote = (currentNote)=>{
      ref.current.click()
      setNote({id:currentNote._id ,etitle:currentNote.title ,edescription:currentNote.description ,etag:currentNote.tag});
    }
    const ref = useRef(null);
    const refClose = useRef(null);
    const handleClick=(e)=>{
      console.log("Updating the note...." ,note);
      editNote(note.id,note.etitle,note.edescription,note.etag)
      refClose.current.click();  
  }
  const onChange = (e)=>{
      setNote({...note,[e.target.name]:e.target.value})
  }

  return (
    <>
<AddNote />
{/* <!-- Button trigger modal --> */}
<button type="button" class="btn btn-primary d-none" ref={ref} data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button>

{/* <!-- Modal --> */}
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Edit Notes</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <form>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Title
        </label>
        <input
          type="text"
          className="form-control"
          id="etitle"
          name="etitle"
          aria-describedby="emailHelp"
          value={note.etitle}
          onChange={onChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <input
          type="text"
          className="form-control"
          id='edescription'
          name="edescription"
          value={note.edescription}
          onChange={onChange}
          minLength={5}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="tag" className="form-label">
          Tag
        </label>
        <input
          type="text"
          className="form-control"
          id='etag'
          name="etag"
          value={note.etag}
          onChange={onChange}
          minLength={5}
          required
        />
      </div>
    </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" ref={refClose}>Close</button>
        <button disabled={note.etitle.length<5 || note.edescription.length<5} type="button" class="btn btn-primary" onClick={handleClick}>Update Note</button>
      </div>
    </div>
  </div>
</div> 
    <div className="row">
    <h2>Your notes</h2>
    <div className="container">
      {notes.length === 0 && "No Notes to display" }
    </div>
    {notes.map((note) => {
      return <Noteitem key={note._id} updateNote={updateNote} note={note}/> ;
    })}
  </div>
    </>
  )
}

export default Notes;