import React, { useEffect, useState } from 'react'
import { getuser, deleteUser } from '../servises/api'
import { Table, TableBody, TableCell, TableHead, TableContainer, TableRow, makeStyles } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { confirmAlert } from "react-confirm-alert"
import 'react-confirm-alert/src/react-confirm-alert.css';

function User() {
    const usestyle = makeStyles({
        table: {
            width: "80%",
            // padding:"20px 100px",
            // margin:"0px 50px",
            position: 'absolute',
            top: "120px",
            left: "10%",

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
        setuserarry(response.data)
    }
    const deletebtn = async (id) => {
        confirmAlert({
            title: 'Are you sure',
            message: 'Do you Want To Delete this.',
            buttons: [
                {
                    label: 'Yes',
                    onClick: async () => {
                        await toast.success(" User Is Delete Succesfully🚮");
                        await deleteUser(id);
                        await getalluser();
                    },
                },
                {
                    label: 'No',
                    onClick: () => { }
                }
            ]
        });
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
