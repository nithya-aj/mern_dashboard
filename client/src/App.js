import './App.css';
import ForgotPass from './pages/ForgotPass';
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import Register from './pages/Register';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/forgot-password" element={<ForgotPass />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
