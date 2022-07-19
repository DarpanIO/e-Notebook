import React, { useContext } from "react";
import noteContext from "../context/notes/noteContext";
import { Noteitem } from "./Noteitem";

export const Notes = () => {
    const context = useContext(noteContext);
    const { notes, setNotes } = context;
  return (
    <div className="row">
    <h2>Your notes</h2>
    {notes.map((note) => {
      return <Noteitem note={note}/> ;
    })}
  </div>
  )
}

export default Notes;