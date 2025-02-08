import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './navbar/Navbar';
import Footer from './footer/Footer';
import CardsSection from './Card section/CardSection';
import ExamDetails from './ExamDetails/Examdetails'; // Import the ExamDetails page
import RegisterForm from './RegisterForm/RegisterForm';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main className="main-content">
          <Routes>
            {/* Home Route */}
            <Route path="/" element={<CardsSection />} />
            
            {/* Exam Details Route */}
            <Route path="/exam/:id" element={<ExamDetails />} />
            <Route path="/register/:id" element={<RegisterForm />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
