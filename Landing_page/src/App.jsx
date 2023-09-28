
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import LandingPage from './assets/Components/Home/LandingPage'

import Drivers from './assets/Components/Drivers/Drivers'
import Navigation from './assets/Components/Navigation/Navigation'
import Constructors from './assets/Components/Constructors/Constructors'
import Circuits from './assets/Components/Circuits/Circuits'
import Gallery from './assets/Components/Gallery/Gallery'
import History from './assets/Components/History/History'
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
