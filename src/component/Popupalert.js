import React from 'react'

export default function Popupalert() {
    return (
        <div className='popup' style={{backgroundColor:"green"  ,width:"300px",margin:"30px"}}>
            <div class="card text-center">
                <div class="card-body" style={{width:"300px",margin:"40px 0px"}}>
                    <h5 class="card-title">Are You Sure</h5>
                    <p class="card-text">Do You Wont To Edit A Form </p>
                    <a href="#" class="btn btn-danger mx-2">cancle</a>
                    <a href="#" class="btn btn-primary">yes</a>
                </div>

            </div>
        </div>
    )
}
