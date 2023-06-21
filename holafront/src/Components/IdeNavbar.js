import React from 'react';
import Select from 'react-select';
import '../Styles/IdeNavbar.css';

const Navbar = ({ userLang, setUserLang, userTheme,
	setUserTheme, fontSize, setFontSize }) => {
	const languages = [
		{ value: "c", label: "C" },
		{ value: "cpp", label: "C++" },
		{ value: "python", label: "Python" },
		{ value: "java", label: "Java" },
	];
	const themes = [
		{ value: "vs-dark", label: "Dark" },
		{ value: "light", label: "Light" },
	]
	return (

		<div className='ide-navbar-container'>
			<div className="ide-navbar">
				{/* <h1>Geeks Code Compiler</h1> */}

				<div className='ide-select'>
					<div>
						<Select styles={{ color: "white", backgroundColor: "black" }} options={languages} value={userLang}
							onChange={(e) => setUserLang(e.value)}
							placeholder={userLang} />

					</div>
					<div>
						<Select options={themes} value={userTheme}
							onChange={(e) => setUserTheme(e.value)}
							placeholder={userTheme} />
					</div>


				</div>
				<div className='ide-font'>
					<label>Font Size</label>
					<input type="range" min="18" max="30"
						value={fontSize} step="2"
						onChange={(e) => { setFontSize(e.target.value) }} />
				</div>


			</div>
		</div>
	)
}

export default Navbar
