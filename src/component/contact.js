import React from 'react';
import { BrowserRouter , Route, Routes, Link } from 'react-router-dom';
const User = () => {
    return (
      <div>
        <h2>Contact Page</h2>
        <p>Welcome to contact</p>
        <Link to="/home">Home</Link>
      </div>
    );
  };
  
  export default User;
         