import logo from './logo.svg'
import './App.css'

function App() {
	return (
		<div className='main-div'>
			<div className='container'>
				<h1>Increment/Decrement counter</h1>
				<h4>using React and Redux</h4>

				<div className='quantity'>
					<a className='quantity__minus' title='Decrement'>
						<span>-</span>
					</a>
					<input name='quantity' type='text' className='quantity__input' />
					<a className='quantity__plus' title='Increment'>
						<span>+</span>
					</a>
				</div>
			</div>
		</div>
	)
}

export default App
