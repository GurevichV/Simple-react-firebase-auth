import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUp from "./components/sign-up/SignUp";
import Home from './components/pages/Home.tsx';
import { UserAuthContextProvider } from "./context/UserAuthContext";
import LogIn from "./components/log-in/LogIn";
import Dashboard from "./components/dashboard/Dashboard";
import ProtectedRoute from './components/ProtectedRoute';
import "./App.css";

const App = () => {
  return (
    <Router>
      <UserAuthContextProvider>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/dashboard' element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/login' element={<LogIn />} />
        </Routes>
      </UserAuthContextProvider>
    </Router>
  );
};

export default App;