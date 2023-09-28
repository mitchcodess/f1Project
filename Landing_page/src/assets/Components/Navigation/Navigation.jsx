import { NavLink } from "react-router-dom"
import './Navigation.css'
function Navigation() {
    return (
        <>
           <nav>
            <ul className="nav-bar">
             <NavLink to='/'><img src="\src\assets\media\61fc02163cf0e70004222072.png"/></NavLink>
                <li><NavLink to='/constructors'>Constructors</NavLink></li>
                <li><NavLink to='/drivers'>Drivers</NavLink></li>
                <li><NavLink to='/schedule'>Schedule</NavLink></li>
                <li><NavLink to='/tracks'>Circuits</NavLink></li>
                <li><NavLink to='/gallery'>Gallery</NavLink></li>
                <li><NavLink to='/history'>History</NavLink></li>
            </ul>
           </nav>
        </>
    )
}

export default Navigation
