import MainLogo from "/main logo.png"
import Logo from "/logo.png"
import "./Navbar.css"
import { Link,useLocation } from "react-router-dom"


const Navbar = () => {
    const location = useLocation();
    const isActive = (path) => {
        return location.pathname === path ? "active" : "";}
    
        return (
        <>
        <div className="navbar">
        <img src={MainLogo} alt="logo" />
        <ul className="navbarList">
            <li className={isActive('/')}>
                <Link to="/">Features</Link>
            </li>
            <div className="Centre">

            <li className={isActive('/blogs')}>
                <Link to="/blogs">Blogs</Link>
            </li>
            <li className={isActive('/company')}>
                <Link to="/company">Company</Link>
            </li>
            <li className={isActive('/more')}>More
                {/* <Link to="/more">More</Link> */}
            </li>
            </div>
            <li className={isActive('/contact')}>
                <Link to="/contact">Contact</Link>
            </li>
            <div className="Monopay">
                <img src={Logo} alt="logo" />
                <li>Get Monopay</li>
            </div>
        </ul>
        </div>
        </>
    )
}

export default Navbar;