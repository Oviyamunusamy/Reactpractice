import React from 'react';
import { BrowserRouter , Route, Routes, Link } from 'react-router-dom';
const User = () => {
    return (
      <div>
        <h2>About page</h2>
        <p>Welcome to about page</p>
        <Link to="/contact">Contact</Link>
      </div>
    );
  };
  
  export default User;