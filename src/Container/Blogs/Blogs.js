import "./Blog.css" ; 
import Image1 from "../../Assets/Images/blog image 1.jpeg" ; 
import Image2 from "../../Assets/Images/blog image 2.jpeg" ; 
import Image3 from "../../Assets/Images/blog image 3.jpeg" ; 
import Image4 from "../../Assets/Images/blog image 4.jpeg" ; 
import Image5 from "../../Assets/Images/blog image 5.jpeg" ; 
function Blog()
{
    return <div className="blog-main-container">
        <div className="blog-container margin-box">
            <div className="blog-heading">
                <h1 className="text-gradient">A lot is happening,<br />We are blogging about it.</h1>
            </div>
            <div className="blog-blogs-container">
                <div className="blogs-classA">
                    <div className="blog-image-container">
                        <img src={Image1} alt="image1"></img>
                    </div>
                    <div className="blogs-classA-blogs">
                            <p>This is paragraph</p>
                            <h1>Future in now in your hand just wind that</h1>
                            <p>This is footer</p>
                    </div>
                </div>
                <div className="blogs-classB">
                    <div className="blogs-classB-blogs">
                        <div className="blogs-classB-image">
                        <img src={Image2} alt="image2"></img>
                        </div>
                        <div>
                            <p>This is paragraph</p>
                            <h1>Future in now in your hand just wind that</h1>
                            <p>This is footer</p>
                        </div>
                    </div>
                    <div className="blogs-classB-blogs">
                        <div className="blogs-classB-image"><img src={Image3} alt="image3"></img></div>
                        <div>
                            <p>This is paragraph</p>
                            <h1>Future in now in your hand just wind that</h1>
                            <p>This is footer</p>
                        </div>
                    </div>
                    <div className="blogs-classB-blogs">
                        <div className="blogs-classB-image"><img src={Image4} alt="image4"></img></div>
                        <div>
                            <p>This is paragraph</p>
                            <h1>Future in now in your hand just wind that</h1>
                            <p>This is footer</p>
                        </div>
                    </div>
                    <div className="blogs-classB-blogs">
                        <div className="blogs-classB-image"><img src={Image5} alt="image5"></img></div>
                        <div>
                            <p>This is paragraph</p>
                            <h1>Future in now in your hand just wind that</h1>
                            <p>This is footer</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div> 
}

export default Blog ; 