import React,{useState,useEffect} from 'react'
import { getuser,edituser} from '../servises/api'
import {confirmAlert} from "react-confirm-alert"
import 'react-confirm-alert/src/react-confirm-alert.css';
import { useNavigate,useParams } from 'react-router-dom';
import { Button, FormControl, FormGroup, Input, InputLabel,makeStyles, Typography ,TextField} from '@material-ui/core';
const initialvalue={
    name:"",
    password:"",
    email:"",
    phone:"",
    address:''
}



function Edit() {
const [user, setuser] = useState(initialvalue)
// const [pop, setpop] = useState(ture)

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

const editUaserData=()=>{
    confirmAlert({
        title: 'Are you sure',
        message: 'Do you Want To Edit this.',
        buttons: [
          {
            label: 'Yes',
            onClick:async () =>  { 
                await edituser(id,user)
                await navigate('/user')
           },
          },
          {
            label: 'No',
            onClick: () => {}
          }
        ]
      });
  
}

const useStyle=makeStyles({
    inputtag:{
        width:"30%",
        padding:"20px 50px",
        background:"#dee2e6",
        position:'absolute',
        // display:"flex",
        // justifyContent:"center",
        // alignItems:"center",
        // margin:"40px auto",
        top:"50%",
        left:"50%",
        transform:"translate(-50%,-40%)",
        borderRadius:"0px 40px 0px 40px",
        boxShadow:"5px 5px 20px 0px black",
        "&>*":{
            // fontSize:"20px",
            margin: "10px 5px"
        },
    },
    btn:{
        "&>*":{
            fontSize:"20px",
        },
        margin:"10px",
    },
    input:{
        "&>*":{
            fontSize:"20px",
            margin:"10px ",
        },
    }

})
const classes=useStyle();
    return (

        // <div className='loginform text-center' style={{ background: "#6610f2" }}>
        //     <h1 className='text-center' style={{ color: "white" }}>Edit Form</h1>
        //         <div className="form-floating mb-3">
        //             <input type="text" className="form-control" id="name" placeholder="name@example.com" onChange={(e)=>onvaluechange(e)} name="name" value={name}/>
        //             <label htmlFor="name">Name</label>
        //         </div>

        //         <div className="form-floating mb-3">
        //             <input type="email" className="form-control" id="email" placeholder="name@example.com" onChange={(e)=>onvaluechange(e)} name="email" value={email}/>
        //             <label htmlFor="email">Email address</label>
        //         </div>

        //         <div className="form-floating mb-3">
        //             <input type="password" className="form-control" id="password" placeholder="name@example.com" onChange={(e)=>onvaluechange(e)} name="password" value={password}/>
        //             <label htmlFor="password">Password</label>
        //         </div>

        //         <div className="form-floating mb-3">
        //             <input type="text" className="form-control" id="add" placeholder="name@example.com" onChange={(e)=>onvaluechange(e)} name="address" value={address}/>
        //             <label htmlFor="add"> Address</label>
        //         </div>

        //         <div className="form-floating mb-3">
        //             <input type="text" className="form-control" id="phone" placeholder="name@example.com" onChange={(e)=>onvaluechange(e)} name="phone" value={phone}/>
        //             <label htmlFor="phone">Phone No.</label>
        //         </div>
        //         <button  onClick={()=>editUaserData()}>Update</button>
        // </div>

        <FormGroup className={classes.inputtag} >
            <Typography variant="h4">Update Form</Typography>
        <FormControl >
            <InputLabel  label="Password"  color="primary" >Name</InputLabel>
            <Input onChange={(e)=>onvaluechange(e)} name="name" value={name}/>
        {/* <TextField id="outlined-basic" label="Name" variant="outlined" onChange={(e)=>onvaluechange(e)} name="name" value={name}/> */}
        </FormControl>
        <FormControl>
            <InputLabel >Email address</InputLabel>
            <Input onChange={(e)=>onvaluechange(e)} name="email" value={email}  />
        </FormControl>
        <FormControl>
            <InputLabel >Password</InputLabel>
            <Input onChange={(e)=>onvaluechange(e)} name="password" value={password} />
        </FormControl>
        <FormControl>
            <InputLabel >Address</InputLabel>
            <Input onChange={(e)=>onvaluechange(e)} name="address" value={address} />
        </FormControl>
        <FormControl>
            <InputLabel >Phone No.</InputLabel>
            <Input onChange={(e)=>onvaluechange(e)}  name="phone" value={phone} />
        </FormControl>
        <Button  variant="contained" className={classes.btn}  onClick={()=>editUaserData()}>Edit Data</Button>
    </FormGroup>

    ) 
}

export default Edit
