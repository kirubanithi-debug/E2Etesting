import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import StudentDetailsForm from './Components/Studentdetails'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/student-details" replace />} />
        <Route path="/student-details" element={<StudentDetailsForm />} />
        <Route path="/test" element={<div>Test Page - Coming Soon!</div>} />
      </Routes>
    </Router>
  )
}

export default App
