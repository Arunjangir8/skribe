import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import GoogleAddon from './pages/GoogleAddon'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/google-addon" element={<GoogleAddon />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
