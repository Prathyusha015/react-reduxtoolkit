import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setTheme, toggleTheme } from '../features/theme/themeSlice';

function Theme() {
  const theme = useSelector((state) => state.theme.mode); // Redux state
  const dispatch = useDispatch();

  const [newTheme, setNewTheme] = useState('light'); // for input field

  // Toggle theme
  const handleToggle = () => {
    dispatch(toggleTheme());
  };

  // Set theme explicitly
  const handleSetTheme = () => {
    dispatch(setTheme(newTheme)); // pass input value
  };

  return (
    <div>
      <h2>Theme</h2>
      <p>Current Theme: {theme}</p> {/* ← Use Redux state here */}
      <button onClick={handleToggle}>Toggle Theme</button>

      <h4>Set Theme</h4>
      <input
        type="text"
        value={newTheme} // input controlled by local state
        onChange={(e) => setNewTheme(e.target.value)}
        placeholder="light or dark"
      />
      <button onClick={handleSetTheme}>Set Theme</button>
    </div>
  );
}

export default Theme;
