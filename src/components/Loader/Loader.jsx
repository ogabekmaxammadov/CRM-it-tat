import Lottie from 'lottie-react'
import loaderAnimation from '../../logo-loader.json'
import './Loader.css'

// Public papkaga joylashtirilgan rasmni ko‘rsatish
loaderAnimation.assets[0].p = '/loader.png'

const Loader = () => (
	<div style={{ width: 200, height: 200 }}>
		<Lottie animationData={loaderAnimation} loop={true} className='loader' />
	</div>
)

export default Loader
