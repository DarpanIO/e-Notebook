import React,{useState} from 'react'
import {Navigate} from 'react-router-dom';
const Signup = () => {
    const [credentials, setCredentials] = useState({name:'',email:'' , password:'',cpassword:''});
    const handleSubmit= async (e)=>{
        e.preventDefault();

        const {name,email,password,cpassword}=credentials;
        const response = await fetch(`http://localhost:5000/api/auth/createuser`,{
            method: 'POST',
            headers :{
              'Content-Type': 'application/json',
            //   'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJjN2JiYjRjY2I3YzRjMzdjNmMwYmIzIn0sImlhdCI6MTY1ODI5MjQ0MH0.V0vVoMNBvLljTpvYiFoeF9pEWP6XtmapvNJ8Ak_y96E'
            },
            body: JSON.stringify({name,email,password})
          });
          const json=await response.json();
          console.log(json);
          if(json.success){
            localStorage.setItem('token',json.authtoken);
            <Navigate to= "/" />
          }
          else{
            alert('Invalid Credentials')
          }
    }
    const onChange=(e)=>{
        setCredentials({...credentials,[e.target.name]:e.target.value})
    }
  return (
    <div><form onSubmit={handleSubmit}>
    <div className="mb-3">
      <label htmlFor="name" className="form-label">Name</label>
      <input type="text" className="form-control" id="name" name="name" aria-describedby="emailHelp" onChange={onChange} />
    </div>
    <div className="mb-3">
      <label htmlFor="email" className="form-label">Email address</label>
      <input type="email" className="form-control" id="email" name="email" aria-describedby="emailHelp" onChange={onChange} />
      <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
    </div>
    <div className="mb-3">
      <label htmlFor="password" className="form-label">Password</label>
      <input type="password" className="form-control" id="password" name="password" onChange={onChange} minLength={5} required/>
    </div>
    <div className="mb-3">
      <label htmlFor="cpassword" className="form-label">Confirm Password</label>
      <input type="password" className="form-control" id="cpassword" name="cpassword" onChange={onChange} minLength={5} required/>
    </div>
    <button type="submit" className="btn btn-primary">Submit</button>
  </form></div>
  )
}

export default Signup