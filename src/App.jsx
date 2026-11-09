import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Open from './pages/Open'
import './styles/Open.css'

function App() {
  return ( 
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Open />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
