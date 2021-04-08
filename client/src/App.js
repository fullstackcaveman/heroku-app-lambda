import './App.css';
import { useState, useEffect } from 'react';

const url = (path) => {
	return process.env.NODE_ENV === 'development'
		? `http://localhost:5000${path}`
		: path;
};

function App() {
	return (
		<div className='App'>
			<header className='App-header'>
				<h2>React App</h2>
			</header>
		</div>
	);
}

export default App;
