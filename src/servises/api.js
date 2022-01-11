
import axios from "axios"
// const url ="http://localhost:3002/user"
const url ="https://ezzyserver.herokuapp.com/api/users"
export const getuser=async (id)=>{
    id=id || '';
    return await axios.get(`${url}/${id}`)
}
export const adduser =async (params,config)=>{
    return await axios.post(url,params,config   )
}
export const edituser =async (id, params,config)=>{
    return await axios.put(`${url}/${id}`, params,config)
}
export const deleteUser =async (id)=>{
   return await axios.delete(`${url}/${id}`)
   
}




