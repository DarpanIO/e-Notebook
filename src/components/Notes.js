import React, { useContext } from "react";
import noteContext from "../context/notes/noteContext";
import { AddNote } from "./AddNote";
import { Noteitem } from "./Noteitem";

export const Notes = () => {
    const context = useContext(noteContext);
    const { notes, addNote } = context;
  return (
    <>
<AddNote /> 
    <div className="row">
    <h2>Your notes</h2>
    {notes.map((note) => {
      return <Noteitem key={note._id} note={note}/> ;
    })}
  </div>
    </>
  )
}

export default Notes;