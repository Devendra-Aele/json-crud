import React, { useState } from 'react'
import { adduser } from '../servises/api'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { Button, FormControl, FormGroup, Input, InputLabel, Typography, makeStyles } from '@material-ui/core';

const initialvalue = {
    name: "",
    last_name: "",
    // password: "",
    // email: "",
    phone: "",
    // address: ''
}
function Login() {
    const [users, setuser] = useState(initialvalue)
    const { name, last_name, email, phone } = users;
    // const schema= Yup.object
    const navigate = useNavigate()

    const onvaluechange = (e) => {
        setuser({ ...users, [e.target.name]: e.target.value })
        // console.log(user)
    }
    const params = new URLSearchParams()
    params.append('first_name', users.name)
    params.append('last_name', users.last_name)
    params.append('email', users.email)
    params.append('phone', users.phone)
    const config = {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    }
    const useStyle = makeStyles({
        inputtag: {
            width: "30%",
            padding: "20px 40px",
            background: "#dee2e6",
            position: 'absolute',
            top: "100px",
            left: "30%",
            // transform: "translate(-50%,-40%)",
            borderRadius: "0px 40px 0px 40px",
            boxShadow: "5px 5px 20px 0px black",
            "&>*": {
                margin: "10px 5px",
            },
        },
        btn: {
            "&>*": {
                fontSize: "20px",
            },
            margin: "10px",
        }
    })
    const classes = useStyle();
    const AddUaserData = async () => {
        await toast.success("New User Is Added Succesfully 🧑");
        console.log(params)
        await adduser(params,config)
        navigate('/user');

    }

    return (
        // <div className='loginform text-center' style={{ background: "#0d6efd" }}>
        //     <h1 className='text-center' style={{ color: "white" }}>User Form</h1>
        //     {/* <form> */}
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
        //         <button  onClick={()=>AddUaserData()}>submit</button>
        //     {/* </form> */}
        // </div>

        <FormGroup className={classes.inputtag} >
            <Typography variant="h4">Add Form</Typography>
            <FormControl>
                <InputLabel label="Password" color="primary" >Name</InputLabel>
                <Input onChange={(e) => onvaluechange(e)} name="name" value={name}/>
            </FormControl>
            <FormControl>
                <InputLabel >Last Name</InputLabel>
                <Input onChange={(e) => onvaluechange(e)} name="last_name" value={last_name} />
            </FormControl>
            <FormControl>
                <InputLabel >Email address</InputLabel>
                <Input onChange={(e) => onvaluechange(e)} name="email" value={email} />
            </FormControl>
            {/* <FormControl>
                <InputLabel >Password</InputLabel>
                <Input onChange={(e) => onvaluechange(e)} name="password"  value={password} />
            </FormControl> */}
            {/* <FormControl>
                <InputLabel >Address</InputLabel>
                <Input onChange={(e) => onvaluechange(e)} name="address" value={address} />
            </FormControl> */}
            <FormControl>
                <InputLabel >Phone No.</InputLabel>
                <Input onChange={(e) => onvaluechange(e)} name="phone" value={phone} />
            </FormControl>
            <Button variant="contained" className={classes.btn} onClick={() => AddUaserData()}>Add Data</Button>
        </FormGroup>
    )
}
export default Login
