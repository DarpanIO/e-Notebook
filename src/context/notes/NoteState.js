import React from "react";
import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props)=>{
 
    const notesInitial = [
        {
          "_id": "62d6380eff10f957dad3db4b",
          "user": "62c7bbb4ccb7c4c37c6c0bb3",
          "title": "My Title",
          "description": "Wake up early",
          "tag": "personal",
          "date": "2022-07-19T04:50:22.327Z",
          "__v": 0
        },
        {
          "_id": "62d6382aff10f957dad3db4e",
          "user": "62c7bbb4ccb7c4c37c6c0bb3",
          "title": "My Title 2",
          "description": "Eat Food",
          "tag": "personal",
          "date": "2022-07-19T04:50:50.847Z",
          "__v": 0
        },
        {
          "_id": "62d6382aff10f957dad3sdb4e",
          "user": "62c7bbb4ccb7c4c37c6c0bb3",
          "title": "My Title 2",
          "description": "Eat Food",
          "tag": "personal",
          "date": "2022-07-19T04:50:50.847Z",
          "__v": 0
        },
        {
          "_id": "62d6382aff10f9a57dad3db4e",
          "user": "62c7bbb4ccb7c4c37c6c0bb3",
          "title": "My Title 2",
          "description": "Eat Food",
          "tag": "personal",
          "date": "2022-07-19T04:50:50.847Z",
          "__v": 0
        },
        {
          "_id": "62d6382aff10f957sdad3db4e",
          "user": "62c7bbb4ccb7c4c37c6c0bb3",
          "title": "My Title 2",
          "description": "Eat Food",
          "tag": "personal",
          "date": "2022-07-19T04:50:50.847Z",
          "__v": 0
        },
        {
          "_id": "62d6382saff10f957dad3db4e",
          "user": "62c7bbb4ccb7c4c37c6c0bb3",
          "title": "My Title 2",
          "description": "Eat Food",
          "tag": "personal",
          "date": "2022-07-19T04:50:50.847Z",
          "__v": 0
        },
        {
          "_id": "62d6382aff10fs957dad3db4e",
          "user": "62c7bbb4ccb7c4c37c6c0bb3",
          "title": "My Title 2",
          "description": "Eat Food",
          "tag": "personal",
          "date": "2022-07-19T04:50:50.847Z",
          "__v": 0
        },
        {
          "_id": "62d6382aff1s0f957dad3db4e",
          "user": "62c7bbb4ccb7c4c37c6c0bb3",
          "title": "My Title 2",
          "description": "Eat Food",
          "tag": "personal",
          "date": "2022-07-19T04:50:50.847Z",
          "__v": 0
        },
      ]

      const [notes, setNotes] = useState(notesInitial)

      //Add a Note
      const addNote=(title,description,tag)=>{ 
            //TODO : API Call
            const note = {
                "_id": "62d63dad80eff10f957dad3db4b",
                "user": "62c7bbb4ccb7c4c37c6c0bb3",
                "title": title,
                "description": description,
                "tag": tag,
                "date": "2022-07-19T04:50:22.327Z",
                "__v": 0
            };
            setNotes(notes.concat(note))        
      }
      //Delete a Note
      const deleteNote= (id)=>{
        console.log("Deleting the note with id" + id);
        const newNotes = notes.filter((note)=>{return note._id!==id})
        setNotes(newNotes);
      }
      
      //Edit a Note
      const editNote= ()=>{

      }
      
    return(
        <NoteContext.Provider value={{notes,setNotes,addNote,deleteNote,editNote}}>
            {props.children}
        </NoteContext.Provider>
    )
    
}

export default NoteState;