import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './styles/App.css';
// import Routes from './Routes';
import React from 'react';
import Courses from './pages/Courses';
import About from './pages/About';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';
import Course from './pages/Course';
import RegisterPage from './pages/Register';
import LoginPage from './pages/Login';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Videos from './components/Videos';
import PDFs from './components/PDFs';
import Notes from './components/Notes';
import ChatGPT from './components/ChatGPT';

//import HistoryAndCulture from './Subjects/HistoryAndCulture';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" exact element={<Courses />} />
          <Route path="/about" exact element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path='/course/:id' element={<Course />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/Login' element={<LoginPage />} />
          {/*<Route path="/HistoryAndculture" element={<HistoryAndCulture />} /> */}

          
          <Route path="/course/:id/videos" element={<Videos />} />
          <Route path="/course/:id/pdfs" element={<PDFs />} />
          <Route path="/course/:id/notes" element={<Notes />} />
          <Route path="/course/:id/chatgpt" element={<ChatGPT />} />



        </Routes>
        <ToastContainer />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

