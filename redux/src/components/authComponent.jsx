import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementbyAmount} from '../features/counter/counterSlice';

function AuthComponent() {

  const {isLoggedIn, user} = useSelector((state) => state.auth); // get count from redux
  const dispatch = useDispatch();


  return (
    <div>
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
