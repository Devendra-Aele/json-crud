import React from 'react'
import { NavLink } from 'react-router-dom'
import { AppBar, Toolbar, Typography,makeStyles, } from '@material-ui/core'
const useStyle=makeStyles({
    head:{
        background:"black"
    },
    tab  :{
        "&>*":{
           margin:"0px 20px",
           fontSize:"20px",
           color:"white",
           textDecoration: "none"
        }
    }
})
export default function Navbar() {
    const classes=useStyle();
    return (
        // <div>
        //     <nav className="navbar navbar-expand-lg " style={{background:"black"}}>
        //         <div className="container-fluid">
        //             <Link className="navbar-brand" to="/">✨CRUD OPERATION</Link>
        //             <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        //                 <span className="navbar-toggler-icon"></span>
        //             </button>
        //             <div className="collapse navbar-collapse" id="navbarSupportedContent">
        //                 <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        //                     <li className="nav-item">
        //                         <Link className="nav-link mx-4 " aria-current="page" to="/user"> <h5>USER <i className="fas fa-id-card"></i></h5></Link>
        //                     </li>
        //                     <li className="nav-item">
        //                         <Link className="nav-link " aria-current="page" to="/login"> <h5>LOGIN <i className="fas fa-sign-in-alt"></i></h5></Link>
        //                     </li>
        //                 </ul>
        //             </div>
        //         </div>
        //     </nav>
        // </div>
        <AppBar className={classes.head} position='static'>
            <Toolbar className={classes.tab}>
                <NavLink   to="./">✨CRUD OPERATION</NavLink>
                <NavLink  to="./user">All User</NavLink>
                <NavLink to="/add">Add User</NavLink>
            </Toolbar>
        </AppBar>
    )
}

