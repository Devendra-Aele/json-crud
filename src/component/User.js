import React, { useEffect, useState } from 'react'
import { getuser, deleteUser } from '../servises/api'
import { Table, TableBody, TableCell, TableHead, TableContainer, TableRow, makeStyles } from '@material-ui/core'
import { Link } from 'react-router-dom'
// import { confirmAlert } from 'react-confirm-alert';

function User() {
    const usestyle = makeStyles({
        table: {
            width:"80%",
            position:'absolute',
            top:"50%",
            left:"50%",
            transform:"translate(-50%,-100%)"
        },
        row: {
            '&>*': {
                background: "black",
                color: "white",
                fontSize: "20px"
            }
        },
        data: {
            '&>*': {
                fontSize: "18px"
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
    const deletebtn = async (id) => {
        console.log('clicked')
        await deleteUser(id);
        getalluser();
    }

    return (

        <Table className={classes.table} id="table" >
            <TableHead>
                <TableRow className={classes.row}>
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
                        <TableRow className={classes.data}>
                            <TableCell>{user.name}</TableCell>
                            <TableCell>{user.email}</TableCell>
                            <TableCell>{user.password}</TableCell>
                            <TableCell>{user.address}</TableCell>
                            <TableCell>{user.phone}</TableCell>
                            <TableCell>
                                <Link to={`./edit/${user.id}`}><i className="fas fa-user-edit" /></Link>
                                <Link to={'/user'} onClick={() => deletebtn(user.id)}> <i className="fas fa-trash" /></Link>
                            </TableCell>
                        </TableRow>
                    ))
                }
            </TableBody>
        </Table>
    )
}

export default User
