import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './components/counter.jsx'
import Theme from './components/theme.jsx'
import AuthComponent from './components/authComponent.jsx'


function App() {
  

  return (
    <>
      <div>

        <Counter />
        <Theme/>
        <AuthComponent/>

       

      </div>
    </>
  )
}

export default App
