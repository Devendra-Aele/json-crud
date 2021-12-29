import React, { useEffect, useState } from 'react'
import { getuser,deleteUser } from '../servises/api'
import { Table, TableBody, TableCell, TableHead, TableContainer, TableRow, makeStyles } from '@material-ui/core'
import {Link} from 'react-router-dom'
import { confirmAlert } from 'react-confirm-alert';
function User() {
    const usestyle = makeStyles({
        table: {
            marginTop: "50px",
            border: "1px solid black",
        },
        row: {
            '&>*': {
                background: "black",
                color: "white",
                fontSize: "20px"
            }
        }
    })
    const classes = usestyle()
    const [arry, setuserarry] = useState([])
    useEffect(() => {
        getalluser()
    }, [])

    const getalluser = async () => {
        const response = await getuser()
        console.log(response.data)
        setuserarry(response.data)
    }
    const deletebtn= async(id)=>{
        console.log('clicked')
      await deleteUser(id);
      confirmAlert({
        customUI: ({ onClose }) => {
          return (
            <div className='custom-ui'>
              <h1>Are you sure?</h1>
              <p>You want to delete this file?</p>
              <button onClick={onClose}>No</button>
              <button
                onClick={() => {
                  this.handleClickDelete();
                  onClose();
                }}
              >
                Yes, Delete it!
              </button>
            </div>
          );
        }
      })
        getalluser();
    }

    return (
        <div className='container text-center '>
            <h1 className='mt-4' >USER TABLE</h1>
            <Table className={classes.table} id="table" >
                <TableHead>
                    <TableRow className={classes.row}>
                        {/* <TableCell>No</TableCell> */}
                        <TableCell>Name</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Password</TableCell>
                        <TableCell>Address</TableCell>
                        <TableCell>Phone No.</TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        arry.map(user => (
                            <TableRow>
                                {/* <TableCell>{user.id}</TableCell> */}
                                <TableCell>{user.name}</TableCell>
                                <TableCell>{user.email}</TableCell>
                                <TableCell>{user.password}</TableCell>
                                <TableCell>{user.address}</TableCell>
                                <TableCell>{user.phone}</TableCell>
                                <TableCell>
                                    <Link to={`./edit/${user.id}`}><i className="fas fa-user-edit"/></Link>
                                    <Link  to={'/user'} onClick={()=>deletebtn(user.id)}> <i className="fas fa-trash" /></Link>
                                   
                                </TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </div>
    )
}

export default User
