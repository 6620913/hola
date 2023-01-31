

import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Routes, Route}
	from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Problems from './pages/problems';
import Signup from './pages/signup';
import Contact from './pages/contact';
import IDE from './pages/ide';

function App() {
return (
	<Router>
	<Navbar />
	<Routes>
		<Route exact path='/' element={<Home />} />
		<Route path='/about' element={<About/>} />
		<Route path='/contact' element={<Contact/>} />
		<Route path='/problems' element={<Problems/>} />
		<Route path='/sign-up' element={<Signup/>} />
        <Route path='/IDE' element={<IDE/>} />
	</Routes>
	</Router>
);
}

export default App;
