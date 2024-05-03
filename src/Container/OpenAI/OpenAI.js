import Feature from "../../Components/Feature/Feature"
import "./OpenAI.css" ; 
const featureData = [
    {
        title : "This is title" ,
        text : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        title : "This is title" ,
        text : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        title : "This is title" ,
        text : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
]
function OpenAI()
{
    return <div className="OpenAI-section-container padding-box">
            <div className="OpenAI-section-heading">
                <h1 className="text-gradient header">the future is now and you just need to realize it.step into future today. &make it happen</h1>
                <p className="text-gradient">Request early access to get started</p>
            </div>
            <div className="OpenAI-features">
                {
                    featureData.map((item,index)=><div className="feature-lists"><Feature title={item.title} text={item.text} /></div>)
                }
            </div>
        </div>
}

export default OpenAI ; 