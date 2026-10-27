import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import Navbar from "./components/Navbar"

const App = () => {
  return (
    <Router>
      <div>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/carros" element={<Carros/>}/>
        </Routes>
      </div>
    </Router>
  )
}

export default App