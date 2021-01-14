const Navbar = ({activepage}) => {

    return ( 
        <div className="container">
            <nav>
            <h1 className="Logo"><a href="/">Riya Paul</a></h1>
            <ul className="NavLinks">
                <li><a className="pageactive" href="abced">Home</a></li>
                <li><a href="abced">About</a></li>
                <li><a href="abced">Photos</a></li>
                <li><a href="abced">Publications</a></li>
            </ul>
        </nav>
        </div>
    );
}
 
export default Navbar;