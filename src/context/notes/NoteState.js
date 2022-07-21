import React from "react";
import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props)=>{
    const host= 'http://localhost:5000'
    const notesInitial = []

      const [notes, setNotes] = useState(notesInitial)

      //Get all notes
      const getNotes=async ()=>{ 
            //TODO : API Call
            const response = await fetch(`${host}/api/notes/fetchallnotes`,{
              method: 'GET',
              headers :{
                'Content-Type': 'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJjN2JiYjRjY2I3YzRjMzdjNmMwYmIzIn0sImlhdCI6MTY1ODI5MjQ0MH0.V0vVoMNBvLljTpvYiFoeF9pEWP6XtmapvNJ8Ak_y96E'
              }
    
            },
            )
            const json= await response.json()
            console.log(json)
            setNotes(json)
      }
      //Add a Note
      const addNote=async (title,description,tag)=>{ 
            //TODO : API Call
            const response = await fetch(`${host}/api/notes/addnote`,{
              method: 'POST',
              headers :{
                'Content-Type': 'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJjN2JiYjRjY2I3YzRjMzdjNmMwYmIzIn0sImlhdCI6MTY1ODI5MjQ0MH0.V0vVoMNBvLljTpvYiFoeF9pEWP6XtmapvNJ8Ak_y96E'
              },
              body: JSON.stringify({title,description,tag})
    
            },
            )

            const note = await response.json();
            setNotes(notes.concat(note))        
      }
      //Delete a Note
      const deleteNote= async (id)=>{
        //TODO : API CAll
        const response = await fetch(`${host}/api/notes/deletenote/${id}`,{
          method: 'DELETE',
          headers :{
            'Content-Type': 'application/json',
            'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJjN2JiYjRjY2I3YzRjMzdjNmMwYmIzIn0sImlhdCI6MTY1NzM0MDgyNH0.YYHu06KVub-RuAU5ZMsMG9t7Kn94NdDjPgRsZz94S9w'
          },

        },
        )

        console.log("Deleting the note with id" + id);
        const newNotes = notes.filter((note)=>{return note._id!==id})
        setNotes(newNotes);
      }
      
      //Edit a Note
      const editNote= async(id,title,description,tag)=>{
        // API Call
        const response = await fetch(`${host}/api/notes/updatenote/${id}`,{
          method: 'PUT',
          headers :{
            'Content-Type': 'application/json',
            'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJjN2JiYjRjY2I3YzRjMzdjNmMwYmIzIn0sImlhdCI6MTY1NzM0MDgyNH0.YYHu06KVub-RuAU5ZMsMG9t7Kn94NdDjPgRsZz94S9w'
          },
          body: JSON.stringify({title,description,tag})

        },
        )
        const json = response.json();
        //Logic to edit in client
        let newNotes = JSON.parse(JSON.stringify(notes))
          for(let index=0 ;index<notes.length;index++){
            const element = newNotes[index];
            if(element._id=== id){
              newNotes[index].title=title;
              newNotes[index].description=description;
              newNotes[index].tag=tag;
              break;
            }
          }
          setNotes(newNotes); 
      }
      
    return(
        <NoteContext.Provider value={{notes,setNotes,addNote,deleteNote,editNote,getNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
    
}

export default NoteState;