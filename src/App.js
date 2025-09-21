import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Problem from './pages/Problem';
import Solution from './pages/Solution';
import Architecture from './pages/Architecture';
import Demo from './pages/Demo';
import About from './pages/About';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/problem" element={<Problem />} />
            <Route path="/solution" element={<Solution />} />
            <Route path="/architecture" element={<Architecture />} />
            <Route path="/demo" element={<Demo />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </motion.main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
