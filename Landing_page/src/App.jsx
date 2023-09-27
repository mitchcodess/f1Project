
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import LandingPage from './assets/Components/Home/LandingPage'
import About from './assets/Components/Drivers/Drivers'
import Contact from './assets/Components/Teams/Teams'
import ModalPage from './assets/Components/ModalPage'
function App() {
  return (    
  <Router>
    <Routes>
      <Route path ='/' element={<LandingPage/>} />
      <Route path ='/about' element={<About/>} />
      <Route path ='/contact' element={<Contact/>} />
      <Route path ='/modal' element={<ModalPage/>} />
    </Routes>
  </Router>
  )
}

export default App
