import imagemBK from '../components/Assets/ShipLandingBK.png'
import '../styles/landing.css'

export default function LandingPage() {
    return(
        <div className='landing'>
            <div className='content'>
                <h1>Real-time updates for</h1>
                <h1>Port management.</h1>
            </div>
            <img className='imgBK' src={imagemBK}/>
        </div>
    )
}