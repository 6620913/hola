

import React from 'react';
import axios from 'axios';
import Navbar from '../Components/Navbar';
import '../Styles/main.css'
import { NavLink } from "react-router-dom";


class App extends React.Component {

	state = {
		details: [],
	}

	componentDidMount() {

		let data;


		axios.get('http://localhost:8000/problems/')
			.then(res => {
				data = res.data;
				this.setState({
					details: data
				});
			})
			.catch(err => { 
				console.log(err)
			})
	}

	render() {
		return (
			<div>
				<Navbar />


				<div className='container'>

					<div className='problemlist'>
						
							{this.state.details.map((detail,id) => (
								<div className='problem' key={id}>

										<NavLink to={"/" + detail.id} style={{ textDecoration: "None",color:"white"}}>
											{detail.id}{". "}{detail.problem}
										</NavLink>
						
								</div>
							)

							)}
					


					</div>
				</div>


			</div>
		);
	}
}

export default App;
