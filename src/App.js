import './bootstrap.min.css';
import './App.css';

import Button from './components/UI/button/Button';
import Spinner from './components/UI/spinner/Spinner';

function App() {
	return (
		<div className='App'>
			friendzone app{' '}
			<Button text='click me' style={{ backgroundColor: '#0f67fc' }} />
			<Spinner />
		</div>
	);
}

export default App;
