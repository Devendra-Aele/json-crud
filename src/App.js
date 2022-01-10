
import './App.css';
import Navbar from './component/Navbar';
import User from './component/User'
import Login from './component/Login'
import Edit from './component/Edit'
import Home from './component/Home'
import { ToastContainer } from 'react-toastify';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// import Popupalert from './component/Popupalert';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        {/* <Popupalert/> */}
        <Routes>
          <Route exact path="/user" element={<User />} />
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/add" element={<Login />} />
          <Route exact path="user/edit/:id" element={<Edit/>} />
        </Routes>
        <ToastContainer position="top-center"/>
      </Router>
    </>
  );
}

export default App;
