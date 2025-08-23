import Lottie from 'lottie-react'
import loaderAnimation from '../../logo-loader.json'

const Loader = () => {
	return (
		<div style={{ width: 200, height: 200 }}>
			<Lottie animationData={loaderAnimation} loop={true} fill='blue' />
		</div>
	)
}

export default Loader
