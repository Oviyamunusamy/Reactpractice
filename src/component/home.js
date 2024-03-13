import React from 'react';
import { BrowserRouter , Route, Routes, Link } from 'react-router-dom';
const User = () => {
    return (
      <div>
        <h2>Home page</h2>
        <p>Welcome to about page</p>
        <Link to="/user">User</Link>
      </div>
    );
  };
  
  export default User;
