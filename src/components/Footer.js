const Footer = () => {
    return (
        <div className="footer">
            <div className="container grid">
                <nav className="footer-nav">
                    <ul className="footer-links">
                        <li><a href="home">Home</a></li>
                        <li><a href="about">About</a></li>
                        <li><a href="photos">Photos</a></li>
                        <li><a href="journals">Journals</a></li>
                        <li><a href="papers">Papers</a></li>
                        <li><a href="expertise">Expertise</a></li>
                    </ul>
                    <ul className="footer-links">
                        <li><a href="terms">Terms & Conditions</a></li>
                        <li><a href="privacy">Privacy Policy</a></li>
                        <li><a href="disclosure">Disclosure</a></li>
                    </ul>                    
                </nav>
                <ul className="social-links flex">
                        <li><i className="fab fa-facebook-square fa-2x"></i></li>                    
                        <li><i className="fab fa-twitter-square fa-2x"></i></li>                    
                        <li><i className="fab fa-github-square fa-2x"></i></li>                    
                        <li><i className="fab fa-instagram-square fa-2x"></i></li>                    
                </ul>
            </div>
        </div>
    )
}

export default Footer;