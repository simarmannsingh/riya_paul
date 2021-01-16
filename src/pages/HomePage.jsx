
//  importing Component
import Navbar from '../components/Navbar';
import Riya from "../assets/riya.jpg";

const HomePage = () => {
    return (         
        <div className="container">
            <Navbar />
            <section className="grid intro sec1">
                <div className="intro-social flex">
                    <a href="https://twitter.com/riyapual">Tw</a>
                    <a href="https://linkedin.com/riyapual">In</a>
                    <a href="https://facebook.com/riyapual" className="social-active">Fb</a>
                </div>

                <div className="main-intro">
                    <h1>I'm Riya Paul</h1>
                    <h6>Neuroscientist, ML Expert, Painter</h6>
                </div>
                
                <div className="profile-pic">
                    <img src={Riya} alt=""/>
                </div>
            </section>

            <section className="sec2">
                
            </section>
        </div>
    ); 
}
 
export default HomePage;