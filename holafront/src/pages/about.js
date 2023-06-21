import React from "react";
import Navbar from '../Components/Navbar';
import '../Styles/main.css'
const About = () => {
	return (
		<div>
			<Navbar></Navbar>
			<div id='about' className='About container'>


				<div className='topic-head' ><h1>About/{'>'}</h1></div>

				<div className='about-content'>
					<div className='aboutclass'>



						<div className='aboutinfo'>

							<div className='info-block'>
								{/* <h5 className='info-block-heading'>
		  WorkExperience
		</h5> */}

								<div className='about-txt'>
									"Welcoem to my personal development Environment Thats the place to boost my coding and development skills here i can code as well as i can be a developer both at the same time because thats the Selfe made IDE hence i can customize it whenever I want with some new feature new ui watever I want with my full control as well as I am learning too  much with that work as a developer because I am getting familer with new techniques and tech each time I try to add some new feature"
								</div>
							</div>


						</div>

					</div>



				</div>

			</div>
		</div>
	);
};

export default About;
