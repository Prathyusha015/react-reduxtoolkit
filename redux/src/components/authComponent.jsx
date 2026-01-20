import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { login, logout } from '../features/auth/authSlice';   

function AuthComponent() {

  const {isLoggedIn, user} = useSelector((state) => state.auth); 
  const dispatch = useDispatch();


  return (
    <div>
      <h2>Authentication</h2>
      <p>Status: {isLoggedIn ? `Logged in as ${user.name}` : 'Logged out'}</p>
      {!isLoggedIn && (
        <button onClick={() => dispatch(login({ name: 'John', email: 'john@example.com' }))}>
          Login
        </button>
      )}
      {isLoggedIn && <button onClick={() => dispatch(logout())}>Logout</button>}
      
    </div>
  );
}

export default AuthComponent;
