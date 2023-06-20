
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import axios from 'axios';

import '../Styles/ide.css';
import Editor from "@monaco-editor/react";
import Navbar from '../Components/IdeNavbar';
import Axios from 'axios';
import { NavLink } from "react-router-dom";
import spinner from '../spinner.svg';


function App() {

	let params = useParams();
	console.log(params)



	// State variable to set users source code
	const [userCode, setUserCode] = useState(``);

	// State variable to set editors default language
	const [userLang, setUserLang] = useState("python");

	// State variable to set editors default theme
	const [userTheme, setUserTheme] = useState("vs-dark");

	// State variable to set editors default font size
	const [fontSize, setFontSize] = useState(20);

	// State variable to set users input
	const [userInput, setUserInput] = useState("write input here");

	// State variable to set users output
	const [userOutput, setUserOutput] = useState("Output will be here");

	// Loading state variable to show spinner
	// while fetching data
	const [loading, setLoading] = useState(false);


	const [inputOutput, setInputOutput] = useState(true);
	const [IDEstyle, setIDEStyle] = useState(true);

	const [notFound, setNotFound] = useState(false);

	const [state, setState] = useState({

		details: [],


	}
	);


	const options = {
		fontSize: fontSize
	}





	useEffect(() => {
		problem();
	}, []);



	function problem() {



		let data;
		console.log("in function");
		let path = "http://localhost:8000/problems/" + params.IDE;
		console.log(path);
		axios.get(path)
			.then(res => {

				data = res.data;
				console.log(data);
				setState({
					details: data
				});
			})
			.catch(err => {
				console.log(err)
				if(params.IDE!="ide")
				setNotFound(true)
			})

	}

	function setOutput() {
		setInputOutput(false);
	}
	function setInput() {
		setInputOutput(true)
	}

	// Function to call the compile endpoint
	function compile() {
		setLoading(true);
		if (userCode === ``) {
			return
		}

		let formField = new FormData()

		formField.append('userLang', userLang)
		formField.append('userInput', userInput)
		formField.append('userCode', userCode)

		// Post request to compile endpoint
		Axios({
			method: 'post',
			url: 'http://localhost:8000/compiler/',
			data: formField
		}).then((res) => {
			console.log(res.data)


			setInputOutput(false)
			setUserOutput(res.data);
			setLoading(false);
		})
	}

	// Function to clear the output screen
	// function clearOutput() {
	// 	setUserOutput("");
	// }

	return (
		<div className="ide">
<div className='logo'>
							<NavLink to="/" activeStyle>
								Home
							</NavLink>
						</div>

			{notFound ? (<div>Not found </div>) : (
				
				<div className="ide-main">
					
					<div className="ide-left-container" style={{ display: ((params.IDE == "ide") ? ("none") : ("flex")) }} >
						

						<div className='problem-disc'>

							<div className='problem-txt'>{state.details.id}{". "} {state.details.problem}</div>

							


						</div>





					</div>

					<div className="ide-right-container" style={{ width: (params.IDE == "ide" ? ("100vw") : ("60%")) }}>



						<div className='ide-navbar'>
							<Navbar
								userLang={userLang} setUserLang={setUserLang}
								userTheme={userTheme} setUserTheme={setUserTheme}
								fontSize={fontSize} setFontSize={setFontSize}
							/>
						</div>

						<div className='ide-editor'>

							<Editor id="ide-editor"
								options={options}
								height="64vh"
								width="100%"

								
								theme={userTheme}
								language={userLang}
								defaultLanguage="python"
								defaultValue="# Enter your code here"
								onChange={(value) => { setUserCode(value) }}

							/>


						</div>

						<div className='ide-display'>
							<button onClick={setInput}>input</button>
							<button onClick={setOutput}>output</button>
							{inputOutput ? (
								<div className='ide-display-box'>


									<h4>Input:</h4>
									<textarea value={userInput} id="code-inp" onChange=
										{(e) => setUserInput(e.target.value)}>
									</textarea>


								</div>
							) : (
								<div className='ide-display-box'>


									<h4>Output:</h4>

									<textarea id='outputbox' value={userOutput} disabled="true">{userOutput}</textarea>

								</div>
							)}




						</div>

						<div className='ide-btn'>

							<button onClick={() => compile()}>
								Run
							</button>
						</div>




					</div>
				</div>
			)};
		</div>
	);
}

export default App;
