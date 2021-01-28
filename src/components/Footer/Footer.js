import '../Footer/Footer.css'

const Footer = () => {
    return (
        <div className="footer">
            <div className="container grid">
                <nav className="footer-nav">
                    <ul className="footer-links">
                        <li><a href="home">Home</a></li>
                        <li><a href="about">About</a></li>
                        <li><a href="photos">Photos</a></li>
                        <li><a href="publications">Publications</a></li>
                    </ul>
                    <ul className="footer-links">
                        <li><a href="terms">Terms & Conditions</a></li>
                        <li><a href="privacy">Privacy Policy</a></li>
                        <li><a href="disclosure">Disclosure</a></li>
                    </ul>                    
                </nav>
                <ul className="social-links flex">
                        <li>
                            <a href="https://www.facebook.com/riyapaul2011"  target="blank">
                                <i className="fab fa-facebook-square fa-2x"></i>
                            </a>                            
                        </li>
                        <li>
                            <a href="https://twitter.com/RiyaPau02772852" target="blank">
                                <i className="fab fa-twitter-square fa-2x"></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/nilover" target="blank">
                                <i className="fab fa-github-square fa-2x"></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/riya-paul-9b490b58/" target="blank">
                                <i className="fab fa-linkedin fa-2x"></i>
                            </a>                            
                        </li>
                </ul>
            </div>
            <hr className="separator"/>
        </div>
    )
}

export default Footer;