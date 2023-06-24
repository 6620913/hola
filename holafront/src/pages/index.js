import React from 'react';
import Navbar from '../Components/Navbar';
import { Typewriter } from 'react-simple-typewriter';
import '../Styles/main.css'



const Home = () => {
	return (
		<div>
			<Navbar></Navbar>


			<div className='intro container'>
				<div className='intro-content'>
					<p>Start/{'>'}</p>
					<div className='info'> Hi, <span className='sp'></span> </div>
					<div className='info'> {' '}
						<Typewriter
							words={[ 'Welcome to my ','Personal', 'Coding Environment']}
							loop={Infinity}
							cursor
							cursorStyle='|'
							typeSpeed={220}
							deleteSpeed={220}
							delaySpeed={10}

						/>

					</div>

					<p> You should not stop here, Keep moving ahed/{'>'}</p>




				</div>

			</div>
		</div>
	);
};

export default Home;
