const Navbar = ({activepage}) => {

    return ( 
        <div className="container">
            <nav>
                <h1 className="Logo"><a href="/">Riya Paul</a></h1>
                <ul className="NavLinks">
                    <li><a className="pageactive" href="home">Home</a></li>
                    <li><a href="about">About</a></li>
                    <li><a href="photos">Photos</a></li>
                    <li><a href="publications">Publications</a></li>
                </ul>
            </nav>
        </div>
    );
}
 
export default Navbar;