import Feature from "../../Components/Feature/Feature" ; 
import "./WhtGpt.css"

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
    },
    {
        title : "This is title" ,
        text : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
]


function WhtGpt(){
    return <div className="WhtGpt-main-container">
        <div className="WhtGpt-container gradient-background-2 padding-box">
            <div >
            <Feature title="This is title" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />
            </div>
            <div>
                <p className="WhtGpt-paragraph gray-text-gradient">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                    irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                    nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui 
                    officia deserunt mollit anim id est laborum.
                </p>
            </div>
            <div className="WhtGpt-bottom-container">
                {
                    featureData.map((item,index)=><div className="features"><Feature title={item.title} text={item.text} id={item.text+1} /></div>)
                }
            </div>
        </div>
    </div>
}

export default WhtGpt ; 