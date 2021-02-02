
//  importing Component
import Riya from "../assets/riya.jpg";
import avatar from "../assets/bg_blob.svg"
import Accordian from '../components/Accordian/Accordian';
import Footer from '../components/Footer/Footer'
import Twittertimeline from '../components/Twittertimeline';

const HomePage = () => {
    return (         
        <div className="homepage">            
            <section className="container grid intro sec1">
                <div className="intro-social flex">
                    <a href="https://twitter.com/RiyaPau02772852" target="blank">Tw</a>
                    <a href="https://www.linkedin.com/in/riya-paul-9b490b58/" target="blank">In</a>
                    <a href="https://www.facebook.com/riyapaul2011" target="blank" className="social-active">Fb</a>
                </div>

                <div className="main-intro">
                    <h1>I'm Riya Paul</h1>
                    <h6>Neuroscientist, ML Expert, Painter</h6>
                </div>
                
                <div className="profile-pic">
                    <img src={Riya} alt="Riya Paul"/>
                </div>
            </section>

            <section className="container sec2 flex achievements">
                <h2>Area of Expertise</h2>
                <div className="grid achieve">
                    <div className="avatar">
                        <img src={ avatar } alt=""/>
                    </div>
                    <div className="achievements-text">
                        <p>Medical image computing, neuroimaging and analysis applied in finding subtypes inpsychiatric disorder</p>
                        <p>Multivariate modelling, Machine Learning, Deep Learning and statistical learning for feature selection, pattern recognition, classification</p>
                        <p>Transfer Learning Assisted Classification and Detection in psychiatric diseases.</p>
                    </div>
                </div>
            </section>

            <section className="container sec1 flex past-exp">
                <h2>Past Experience</h2>
                <div className="flex outer_shell">
                    <Accordian/>
                </div>

            </section>
            <section className="container sec2 flex tweets">
                <h2>Stay Up to date</h2>
                <Twittertimeline/>
            </section>
            <Footer/>           
        </div>
    ); 
}
 
export default HomePage;