import React from 'react';
import { BrowserRouter , Route, Routes, Link } from 'react-router-dom';
const User = () => {
    return (
      <div>
        <h2>User Page</h2>
        <p>Welcome to the home page!</p>
        <Link to="/state">State</Link>
      </div>
    );
  };
  
  export default User;