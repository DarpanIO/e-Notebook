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
          "_id": "62d6382aff10f957dad3db4e",
          "user": "62c7bbb4ccb7c4c37c6c0bb3",
          "title": "My Title 2",
          "description": "Eat Food",
          "tag": "personal",
          "date": "2022-07-19T04:50:50.847Z",
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
          "_id": "62d6382aff10f957dad3db4e",
          "user": "62c7bbb4ccb7c4c37c6c0bb3",
          "title": "My Title 2",
          "description": "Eat Food",
          "tag": "personal",
          "date": "2022-07-19T04:50:50.847Z",
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
          "_id": "62d6382aff10f957dad3db4e",
          "user": "62c7bbb4ccb7c4c37c6c0bb3",
          "title": "My Title 2",
          "description": "Eat Food",
          "tag": "personal",
          "date": "2022-07-19T04:50:50.847Z",
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
      ]

      const [notes, setNotes] = useState(notesInitial)
    return(
        <NoteContext.Provider value={{notes,setNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
    
}

export default NoteState;