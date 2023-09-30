
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import LandingPage from './Components/Home/LandingPage'
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material'
import Drivers from './Components/Drivers/Drivers'
import Navigation from './Components/Navigation/Navigation'
import Constructors from './Components/Constructors/Constructors'
import Circuits from './Components/Circuits/Circuits'
import Gallery from './Components/Gallery/Gallery'
import History from './Components/History/History'

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const lightTheme = createTheme({
  palette: {
    mode: 'light',
  },
});




function App() {
  return (    
  <ThemeProvider theme={lightTheme}>
    <CssBaseline/>
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
  </ThemeProvider>
  )
}

export default App
