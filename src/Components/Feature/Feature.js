import "./Feature.css"
function Feature({title,text})
{
    return <div className="Feature-container">
        <div className="icon-title-div">
            <span className="bar-icon">

            </span>
            <h1>{title}</h1>
        </div>
        <div className="text-div gray-text-gradient">
            {text}
        </div>
    </div>; 
}

export default Feature ; 