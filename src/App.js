import Navbar from "./Components/Navbar/Navbar" ; 
import Header from "./Container/Header/Header" ; 
import Partner from "./Components/Partner/Partner" ; 
import WhtGpt from "./Container/WhtGpt/WhtGpt" ;
import OpenAI from "./Container/OpenAI/OpenAI" ; 
import FutureDreaming  from "./Container/FutureDreaming/FutureDreaming"; 
import Possibility from "./Components/Possibility/Possibility";
import Blogs from "./Container/Blogs/Blogs"
import Footer from "./Container/Footer/Footer";

function App()
{
    return <div>
        <div className="gradient-background">
        <Navbar />
        <Header />
        </div>
        <Partner />
        <WhtGpt />
        <OpenAI />
        <FutureDreaming />
        <Possibility />
        <Blogs />
        <Footer />
    </div>
}

export default App ; 