import logo from './logo.svg'
import './App.css'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { incNumber, decNumber } from './actions/index'
import { useState, CSSProperties, useEffect } from 'react'
import ClipLoader from 'react-spinners/ClipLoader'
import { BarLoader } from 'react-spinners'

const override = {
	display: 'block',
	margin: '0 auto',
	borderColor: 'red',
	// display: 'flex',
	// justifyContent: 'center',
	// alignItems: 'center',
	// height: '100%',
	// width: '100%',
}
// hello
function App() {
	let [loading, setLoading] = useState(false)
	let [color, setColor] = useState('#36D7B7 ')
	const myState = useSelector(state => state.changeTheNumber)
	const dispatch = useDispatch()

	useEffect(() => {
		setLoading(true)
		setTimeout(() => {
			setLoading(false)
		}, 5000)
	}, [])
	return (
		<div className='main-div'>
			{/* <div className='sweet-loading'>
				<button onClick={() => setLoading(!loading)}>Toggle Loader</button>
				<input
					value={color}
					onChange={input => setColor(input.target.value)}
					placeholder='Color of the loader'
				/>
				<h1 style={{ align: 'textCenter' }}>Neighbour Home</h1>

				<BarLoader
					color={color}
					loading={loading}
					cssOverride={override}
					size={450}
				/>
			</div> */}
			{loading ? (
				<div className='preloader'>
					<h1>Neighbour Home</h1>
					<BarLoader
						color={color}
						loading={loading}
						cssOverride={override}
						size={450}
						width={350}
						speedMultiplier={0.7}
						height={10}
					/>
				</div>
			) : (
				<div className='container'>
					<h1>Increment/Decrement counter</h1>
					<h4>using React and Redux</h4>

					<div className='quantity'>
						<a
							className='quantity__minus'
							title='Decrement'
							onClick={() => dispatch(decNumber(5))}
						>
							<span>-</span>
						</a>
						<input
							name='quantity'
							type='text'
							className='quantity__input'
							value={myState}
						/>
						<a
							className='quantity__plus'
							title='Increment'
							onClick={() => dispatch(incNumber(5))}
						>
							<span>+</span>
						</a>
					</div>
				</div>
			)}
		</div>
	)
}

export default App
