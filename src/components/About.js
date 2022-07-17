import React,{useContext,useEffect} from 'react'
import noteContext from '../context/notes/noteContext'
export const About = () => {
    const a = useContext(noteContext);
    useEffect(() => {
      a.update();
    }, [])
    
  return (
    <div>This is About {a.state.name} in class {a.state.class}</div>
  )
}
