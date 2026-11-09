import {BrowserRouter, Routes, Route,Links} from 'react-router-dom'
import Open from './pages/Open'
import './styles/Open.css'
import { Link } from 'react-router-dom';
import Nav from './components/nav.jsx'

function App() {
  return ( 
    <div className="App">
      <BrowserRouter>
      
        <Routes>
          <Route path='/' element={<Open />} />
        </Routes>
        <Nav />
      </BrowserRouter>
    </div>
  )
}

export default App
