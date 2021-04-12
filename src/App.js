import './bootstrap.min.css';
import './App.css';

import Button from './components/UI/button/Button';

function App() {
	return (
		<div className='App'>
			friendzone app{' '}
			<Button text='click me' style={{ backgroundColor: '#0f67fc' }} />
		</div>
	);
}

export default App;
