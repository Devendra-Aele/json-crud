
import './App.css';
import Navbar from './component/Navbar';
import User from './component/User'
import Login from './component/Login'
import Edit from './component/Edit'
import Home from './component/Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/user" element={<User />} />
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="user/edit/:id" element={<Edit/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
