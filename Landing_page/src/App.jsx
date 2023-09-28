
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import LandingPage from './Components/Home/LandingPage'

import Drivers from './Components/Drivers/Drivers'
import Navigation from './Components/Navigation/Navigation'
import Constructors from './Components/Constructors/Constructors'
import Circuits from './Components/Circuits/Circuits'
import Gallery from './Components/Gallery/Gallery'
import History from './Components/History/History'
function App() {
  return (    
  <Router>
    <Navigation/>
    <Routes>
      <Route path ='/' element={<LandingPage/>} />
      <Route path ='/constructors' element={<Constructors/>} />
      <Route path ='/drivers' element={<Drivers/>} />
      <Route path ='/circuits' element={<Circuits/>} />
      <Route path ='/gallery' element={<Gallery/>} />
      <Route path ='/history' element={<History/>} />
    </Routes>
  </Router>
  )
}

export default App
