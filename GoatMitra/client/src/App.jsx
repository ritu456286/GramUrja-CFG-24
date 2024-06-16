import React from 'react'
import Profile from './Pages/Profile/Profile'
import Palak from './Pages/Palak/Palak'
import Goats from './Pages/Goats/Goats'
import { Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <div>
      {/* Login sign up logic */}
      <Routes>
        <Route path = '/user/:username' element = {<Profile/>}/>
        <Route path = '/user/:username/palaks' element = {<Palak/>} />
        <Route path = '/user/:username/:id' element = {<Goats/>} />
      </Routes>
    </div>
  )
}

export default App