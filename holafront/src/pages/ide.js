
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
	const [Id, setId] = useState(0)
	const [userCode, setUserCode] = useState("#Enter your code here");

	// State variable to set editors default language
	const [userLang, setUserLang] = useState("python");

	// State variable to set editors default theme
	const [userTheme, setUserTheme] = useState("light");

	// State variable to set editors default font size
	const [fontSize, setFontSize] = useState(20);

	// State variable to set users input
	const [userInput, setUserInput] = useState("Input will be here");
	const [userInputType, setUserInputType] = useState("1value")

	// State variable to set users output
	const [userOutput, setUserOutput] = useState("Output will be here");

	// Loading state variable to show spinner
	// while fetching data
	const [loading, setLoading] = useState(false);


	const [inputOutput, setInputOutput] = useState(true);


	const [notFound, setNotFound] = useState(false);

	const [reload, setReload] = useState(true);


	const [state, setState] = useState({

		details: [],


	}
	);


	const options = {
		fontSize: fontSize
	}





	useEffect(() => {
		
		
		// problem();
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
				
				setUserCode(data.code)
	
				
				
			
				// On landing it will set id for compile to params.IDE
				setId(params.IDE)
			})
			.catch(err => {
				console.log(err)
				if (params.IDE !== "ide")
					setNotFound(true)
			})

		

		
	}, []);



	// function problem() {



	


	// }

	function setOutput() {
		setInputOutput(false);
	}
	function setInput() {
		setInputOutput(true)
	}

	// Function to call the compile endpoint
	function compile() {
		setLoading(true);
		if (userCode === "") {
			return
		}

		console.log("enterd")
		// let formField = new FormData()
		// formField.append('id',Id)
		// formField.append('userLang', userLang)
		// formField.append('userInput', userInput)
		// formField.append('userInputType',userInputType)
		// formField.append('userCode', userCode)

		// Post request to compile endpoint
	

		Axios({
			method: 'post',
			url: 'http://localhost:8000/compiler/',
			data: { 'id': Id, 'userLang': userLang, 'userInput': userInput, 'userInputType': userInputType, 'userCode': userCode }

		}).then((res) => {
			console.log(res.data)


			setInputOutput(false)
			setUserOutput(res.data);
			setLoading(false);
		})
			.catch(err => {
				console.log(err)

			})

			Axios({
				method:'patch',
				url:'http://localhost:8000/problems/'+params.IDE+"/",
				data:{'code':userCode}
	
			}).then((res)=>{ 
				console.log(res.data['code'])
			})
			.catch(err=>{
				console.log(err)
			})

		console.log("axious end")
	}


	// Function to clear the output screen
	// function clearOutput() {
	// 	setUserOutput("");
	// }

	
	return (
		
		<div className="ide">
			
			<div className='ide-home' >
				<NavLink style={{ textDecoration: "none", color: "white",fontSize:"20px" }} to="/" activeStyle>
					Home
				</NavLink>
			</div>

			{notFound ? (<div>Not found </div>) : (

				<div className="ide-main">

					<div className="ide-left-container" style={{ display: ((params.IDE === "ide") ? ("none") : ("flex")) }} >


						<div className='problem-disc'>

							<div className='problem-txt'>{state.details.id}{". "} {state.details.problem}</div>




						</div>





					</div>

					<div className="ide-right-container" style={{width:(params.IDE==="ide"?"100%":"cover")}} >



						<div className='ide-navbar'>
							<Navbar 
								userLang={userLang} setUserLang={setUserLang}
								userTheme={userTheme} setUserTheme={setUserTheme}
								fontSize={fontSize} setFontSize={setFontSize}
							/>
						</div>

						<div className='ide-editor' style={{backgroundColor: userTheme==="light"?"white":"black"}}>

							<Editor id="ide-editor"
								options={options}
								height="52vh"
								width="100%"


								theme={userTheme}
								language={userLang}
								defaultLanguage="python"
								defaultValue={userCode}
								onChange={(value) => { setUserCode(value) }}

							/>


						</div>

						<div className='ide-display'>
							<button className='iobtn' onClick={setInput}>input</button>
							<button className='iobtn' onClick={setOutput}>output</button>
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

							<button className='rbtn' onClick={() => compile()}>
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
