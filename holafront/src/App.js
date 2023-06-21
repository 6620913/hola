

import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Routes, Route}
	from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Problems from './pages/problems';
import SignUp from './pages/signup';
import Contact from './pages/contact';
import IDE from './pages/ide';

function App() {
return (
	<Router>
	
	<Routes basename={process.env.PUBLIC_URL}>
		<Route exact path='/' element={<Home />} />
		<Route path='/about' element={<About/>} />
		<Route path='/contact' element={<Contact/>} />
		<Route path='/problems' element={<Problems/>} />
		<Route path='/signup' element={<SignUp/>} />
        <Route path='/:IDE/' element={<IDE/>} />
	</Routes>
	</Router>
);
}

export default App;
