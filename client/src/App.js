import React from 'react'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import ComingSoon from './pages/ComingSoon';
import { Thankyou } from './pages/Thankyou';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" index element={<ComingSoon/>}/>
        <Route path="/thankyou" element={<Thankyou/>}/>
      </Routes>
    </Router>
  )
}

export default App;
