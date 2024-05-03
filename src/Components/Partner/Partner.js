import "./Partner.css"
import Google from "../../Assets/Images/google.png";
import Microsoft from "../../Assets/Images/microsoft.png";
import Atlassian from "../../Assets/Images/atlassian.png";
import Dropbox from "../../Assets/Images/dropbox.png";
import Shopify from "../../Assets/Images/shopify.png";

function Partner()
{
    return <div className="partner-container" >
        <div className="partners">
            <img src={Google} alt="Google" />
            <p>Google</p>
        </div>
        <div className="partners">
            <img src={Microsoft} alt="Microsoft"></img>
            <p>Microsoft</p>
        </div>
        <div className="partners">
            <img src={Atlassian} alt="Altassian"></img>
            <p>Atlassian</p>
        </div>
        <div className="partners">
            <img src={Dropbox} alt="Dropbox"></img>
            <p>Dropbox</p>
        </div>
        <div className="partners">
            <img src={Shopify} alt="Shopify"></img>
            <p>Shopify</p>
        </div>
    </div>
}
export default Partner ; 