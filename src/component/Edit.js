import React,{useState,useEffect} from 'react'
import {adduser, getuser,edituser} from '../servises/api'
import { useNavigate,useParams } from 'react-router-dom';

const initialvalue={
    name:"",
    password:"",
    email:"",
    phone:"",
    address:''
}
function Edit() {
const [user, setuser] = useState(initialvalue)
const {name,password,email,phone,address}=user;
const navigate=useNavigate()
const {id}=useParams();
useEffect(() => {
  loaduserData();
}, [])

const loaduserData=async()=>{
const response=await getuser(id)
setuser(response.data)
}

const onvaluechange=(e)=>{
    setuser({...user,[e.target.name]:e.target.value})
}

const editUaserData=async()=>{
  await edituser(id,user)
   navigate('/user');
}
    return (
        <div className='loginform text-center' style={{ background: "#6610f2" }}>
            <h1 className='text-center' style={{ color: "white" }}>Edit Form</h1>
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
                <button  onClick={()=>editUaserData()}>Edit</button>
        </div>
    ) 
}

export default Edit
