
//  importing Component
import Navbar from '../components/Navbar';
import Riya from "../assets/riya.jpg";
import avatar from "../assets/bg_blob.svg"
import Accordian from '../components/Accordian';
// import fraunhofer_mevis from "../assets/Fraunhofer_mevis.svg"
// import Geomar from "../assets/Geomar.jpg"
// import LMU from "../assets/LMU_Muenchen_Logo.png"
// import MPI_BioCybernetics from "../assets/MPI_BioCybernetics.svg"


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
                    <img src={Riya} alt="Riya Paul"/>
                </div>
            </section>

            <section className="sec2 flex achievements">
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

            <section className="sec1 flex past-exp">
                <h2>Past Experience</h2>
                <div className="flex outer_shell">
                    <Accordian/>
                </div>

            </section>

        </div>
    ); 
}
 
export default HomePage;