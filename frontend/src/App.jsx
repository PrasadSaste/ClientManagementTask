import React from 'react'
import{BrowserRouter ,Routes,Route,Navigate} from 'react-router-dom';
 import Login from './pages/LoginPage';
 import Client from './pages/ClientPage';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route
      path="/login"
      element={<Login/>}
      />
     
     <Route
      path="/client"
      element={<Client/>}
      />
    </Routes>
    
    
    </BrowserRouter>
  )
}

export default App;