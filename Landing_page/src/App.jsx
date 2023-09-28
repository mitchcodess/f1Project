
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import LandingPage from './assets/Components/Home/LandingPage'

import Contact from './assets/Components/Teams/Teams'
import ModalPage from './assets/Components/ModalPage'
import Drivers from './assets/Components/Drivers/Drivers'
import Navigation from './assets/Components/Navigation/Navigation'
function App() {
  return (    
  <Router>
    <Navigation/>
    <Routes>
      <Route path ='/' element={<LandingPage/>} />
      <Route path ='/constructors' element={<Drivers/>} />
      <Route path ='/drivers' element={<Drivers/>} />
      <Route path ='/schedule' element={<Contact/>} />
      <Route path ='/circuits' element={<ModalPage/>} />
      <Route path ='/Gallery' element={<ModalPage/>} />
    </Routes>
  </Router>
  )
}

export default App
