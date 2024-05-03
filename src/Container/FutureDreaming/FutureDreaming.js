import "./FutureDreaming.css"
import FutureImage from "../../Assets/Images/future dreaming ai.png"

function FutureDreaming()
{
    return <div className="FutureDreaming-container padding-box">
        <div className="FutureDreaming-container-image">
        <img src={FutureImage} alt="image3"></img>
        </div>
        <div className="FutureDreaming-container-text">
            <div className="text-container">
                <p className="text-1">Request Early Access to Get Started.</p>
            </div>
            <div className="paragraph-container">
                <h1 className="text-gradient">The Possibilities are Beyond Your Imagination.</h1>
                <p className="gray-text-gradient">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </div>
            <div className="text-container">
                <p className="text-2">Request Early Access to Get Started.</p>
            </div>
        </div>
    </div>
}

export default FutureDreaming ; 