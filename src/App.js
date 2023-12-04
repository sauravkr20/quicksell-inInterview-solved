import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";

function App() {
	const [counter, setCounter] = useState(0);

	const handleDec = () => {
		if (counter === 0) {
			return;
		} else {
			setCounter((prevVale) => setCounter(parseInt(prevVale) - 1));
		}
	};

	const handleInc = () => {
		if (counter === 1000) {
			return;
		} else {
			setCounter((prevVale) => setCounter(parseInt(prevVale) + 1));
		}
	};

	return (
		<div className="App">
			<div className="input-container">
				<button onClick={handleDec} className="dec-button">
					-
				</button>
				<input
					value={counter}
					onChange={(e) => setCounter(e.target.value)}
					className="input-box"
				></input>
				<button onClick={handleInc} className="inc-button">
					+
				</button>
			</div>
		</div>
	);
}

export default App;
