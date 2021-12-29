import React,{useState} from 'react'
import {adduser} from '../servises/api'
// import {useHistory} from  'react-router-dom'
import { useNavigate } from 'react-router-dom';

const initialvalue={
    name:"",
    password:"",
    email:"",
    phone:"",
    address:''
}
function Login() {
const [user, setuser] = useState(initialvalue)
const {name,password,email,phone,address}=user;
const navigate=useNavigate()
const onvaluechange=(e)=>{
    setuser({...user,[e.target.name]:e.target.value})
    console.log(user)
}
const AddUaserData=()=>{
    console.log(" chal ja be bhosdike")
  adduser(user)
   navigate('/user');
}
    return (
        <div className='loginform text-center' style={{ background: "#0d6efd" }}>
            <h1 className='text-center' style={{ color: "white" }}>User Form</h1>
            {/* <form> */}
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="name" placeholder="name@example.com" onChange={(e)=>onvaluechange(e)} name="name" value={name}/>
                    <label htmlFor="name">Name</label>
                </div>

                <div className="form-floating mb-3">
                    <input type="email" className="form-control" id="email" placeholder="name@example.com" onChange={(e)=>onvaluechange(e)} name="email" value={email}/>
                    <label htmlFor="email">Email address</label>
                </div>

                <div className="form-floating mb-3">
                    <input type="password" className="form-control" id="password" placeholder="name@example.com" onChange={(e)=>onvaluechange(e)} name="password" value={password}/>
                    <label htmlFor="password">Password</label>
                </div>

                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="add" placeholder="name@example.com" onChange={(e)=>onvaluechange(e)} name="address" value={address}/>
                    <label htmlFor="add"> Address</label>
                </div>

                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="phone" placeholder="name@example.com" onChange={(e)=>onvaluechange(e)} name="phone" value={phone}/>
                    <label htmlFor="phone">Phone No.</label>
                </div>
                <button  onClick={()=>AddUaserData()}>submit</button>
            {/* </form> */}
        </div>
    ) 
}

export default Login
