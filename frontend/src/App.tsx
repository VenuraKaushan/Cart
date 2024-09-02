import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Login } from "./pages/login";
import { Properties } from "./pages/properties";
import './App.css'

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/properties' element={<Properties />} />
      </Routes>
    </Router>
  )
}

export default App
