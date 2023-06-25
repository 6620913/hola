

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
		<Route exact path='/hola.github.io/' element={<Home />} />
		<Route path='/hola.github.io/about' element={<About/>} />
		<Route path='/hola.github.io/contact' element={<Contact/>} />
		<Route path='/hola.github.io/problems' element={<Problems/>} />
		<Route path='/hola.github.io/signup' element={<SignUp/>} />
        <Route path='/hola.github.io/:IDE/' element={<IDE/>} />
	</Routes>
	</Router>
);
}

export default App;
