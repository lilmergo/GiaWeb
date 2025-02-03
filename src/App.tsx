import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import { Navbar } from './components/Navbar'
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { theme } from './assets/Theme';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import About from './pages/About';

function App() {
  return (
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/experience" element={<Experience />}></Route>
            <Route path="/projects-n-stuff" element={<Projects />}></Route>
            <Route path="/about" element={<About />}></Route>
          </Routes>
        </Router>
    </ThemeProvider>
  )
}

export default App
