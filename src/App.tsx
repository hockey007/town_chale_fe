import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import UserFormPage from './pages/user/UserFormPage'

function App() {
  return (
    <Router>
      <Routes>
        {/* Define the route for "/" */}
        <Route path="/" element={<UserFormPage />} />
      </Routes>
    </Router>
  )
}

export default App
