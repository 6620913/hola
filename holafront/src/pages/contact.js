import React from 'react';
import Navbar from '../Components/Navbar';
import '../Styles/main.css'


import linkdin from '../files/linkedin.png'
import github from '../files/github.png'
import gmail from '../files/gmail.png'

const Contact = () => {
return (
	<div>
			<Navbar></Navbar>
			<div id='contact' className='contact'>

<div className='contact-content container' >

	<div className='topic-head' ><h1>Contact/{'>'}</h1></div>

	<div className='contactinfo'>
		{/* <h4 >Find me on</h4> */}


		<div className='contact-row'>
				
			<div className='col1'>
				<div className='ctxt'>
					<div className='clogo'>
					   <a href='https://www.linkedin.com/in/neeraj-gupta-2a0060202/'><img className='cimg' src={linkdin} /></a> 
					</div>
					{/* <div className='clink'>
						<a >https://www.linkedin.com/in/neeraj-gupta-2a0060202/</a>
					</div> */}
				</div>
				<div className='ctxt'>

					<div className='clogo'>
					<a  href='https://github.com/6620913'> <img className='cimg' src={github} /></a>
					   
					</div>
					{/* <div className='clink' href="https://github.com/6620913">
					
				
					</div> */}

				</div>
			 



			</div>
			<div className='col2'>
			<div className='ctxt'>
				
					<div className='clogo'>
						<img className='cimg' src={gmail} />
					</div>
					<div className='clink'>
						6620913@gmail.com
					</div>
				</div>
			</div>


		</div>
   




	</div>


</div>



</div>
	</div>
);
};

export default Contact;
