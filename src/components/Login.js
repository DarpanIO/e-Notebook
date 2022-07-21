import React,{useState} from 'react';
import {useNavigate} from 'react-router-dom';

const Login = (props) => {
    const navigate= useNavigate()
    const [credentials, setCredentials] = useState({email:'' , password:''});
    const handleSubmit= async (e)=>{
        e.preventDefault();

        const response = await fetch(`http://localhost:5000/api/auth/login`,{
            method: 'POST',
            headers :{
              'Content-Type': 'application/json',
            //   'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJjN2JiYjRjY2I3YzRjMzdjNmMwYmIzIn0sImlhdCI6MTY1ODI5MjQ0MH0.V0vVoMNBvLljTpvYiFoeF9pEWP6XtmapvNJ8Ak_y96E'
            },
            body: JSON.stringify({email:credentials.email,password:credentials.password})
          });
          const json=await response.json();
          console.log(json);
          if(json.success){
            localStorage.setItem('token',json.authtoken);
            navigate("/");
            props.showAlert("Logged in Successfully","success");
          }
          else{
            props.showAlert("Invalid details","success")
          }
    }
    const onChange=(e)=>{
        setCredentials({...credentials,[e.target.name]:e.target.value})
    }
  return (
    <div>
    <form onSubmit={handleSubmit}>
    <div class="mb-3">
      <label htmlFor="exampleInputEmail1" class="form-label">Email address</label>
      <input type="email" class="form-control" name="email" value={credentials.email} id="exampleInputEmail1" onChange={onChange} aria-describedby="emailHelp" />
      <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
    </div>
    <div class="mb-3">
      <label htmlFor="exampleInputPassword1" class="form-label">Password</label>
      <input type="password" class="form-control" name="password" value={credentials.password} onChange={onChange} id="exampleInputPassword1" />
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
  </div>
  )
}

export default Login