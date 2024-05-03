import Image from "../../Assets/Images/ai_image.png"
import GroupImage from "../../Assets/Images/ai_image.png" ;
import "./Header.css"
function Header()
{
    return <div className="header-container">
        <div className="header-text">
            <div>
            <h1 className="text-gradient">Let's Build Something Amaging With Chat GPT</h1>
            <p className="gray-text-gradient">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            </div>
            <div className="input-container">
                <input type="email" placeholder="Enter your email address" className="email-input" />
                <button type="submit" className="button-type-2">Get Started</button>
            </div>
            <div className="group-icon-image-text">
                <div className="group-icon-image">
                    <img src={GroupImage} alt="Images"></img>
                </div>
                <p className="gray-text-gradient">About 10000 people has joined us in our journey to make a new world.</p>
            </div>
        </div>
        <div className="header-image">
            <img src={Image} alt="heroimage"></img>
        </div>
    </div>
}

export default Header ; 