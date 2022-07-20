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
              method: 'post',
              headers :{
                'Content-Type': 'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJjN2JiYjRjY2I3YzRjMzdjNmMwYmIzIn0sImlhdCI6MTY1ODI5MjQ0MH0.V0vVoMNBvLljTpvYiFoeF9pEWP6XtmapvNJ8Ak_y96E'
              },
              body: JSON.stringify({title,description,tag})
    
            },
            )

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
          method: 'post',
          headers :{
            'Content-Type': 'application/json',
            'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJjN2JiYjRjY2I3YzRjMzdjNmMwYmIzIn0sImlhdCI6MTY1NzM0MDgyNH0.YYHu06KVub-RuAU5ZMsMG9t7Kn94NdDjPgRsZz94S9w'
          },
          body: JSON.stringify({title,description,tag})

        },
        )
        const json = response.json();
        //Logic to edit in client
          for(let index=0 ;index<notes.length;index++){
            const element = notes[index];
            if(element._id=== id){
              element.title=title;
              element.description=description;
              element.tag=tag;
            }
          }
      }
      
    return(
        <NoteContext.Provider value={{notes,setNotes,addNote,deleteNote,editNote,getNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
    
}

export default NoteState;