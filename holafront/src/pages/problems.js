

import React from 'react';
import axios from 'axios';

class App extends React.Component {

	state = {
		details : [],
	}

	componentDidMount() {

		let data ;

		axios.get('http://localhost:8000/problems/')
		.then(res => {
			data = res.data;
			this.setState({
				details : data	
			});
		})
		.catch(err => {})
	}

render() {
	return(
	<div>
			{this.state.details.map((detail, id) => (
			<div key={id}>
			<div >
				<div >
          <h1>In App</h1>
						<h1>{detail.Book} </h1>
            <h2>{detail.Chapter}</h2>
            <p>{detail.Problem}</p>

				</div>
			</div>
			</div>
			)
		)}
	</div>
	);
}
}

export default App;
