



import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Register from './Register'
import Login from './Login'
import Products from './Products'
function App(){

  return(
    <div className="app">
      <Router>
        <Routes>

          <Route path="/" element={<Register/>}/>
          
          <Route path="/login" element={<Login/>}/>

          <Route path="products" element={<Products/>}/>

        </Routes>
        
      </Router>
    </div>
  )
}

export default App