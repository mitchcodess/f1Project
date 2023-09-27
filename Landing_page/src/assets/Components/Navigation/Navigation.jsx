import { NavLink } from "react-router-dom"
import './Navigation.css'
function Navigation() {
    return (
        <>
           <nav>
            <ul className="navigation">
                <li><img src="\src\assets\media\61fc02163cf0e70004222072.png"/></li>
                <li><NavLink to='/home'>Home</NavLink></li>
                <li><NavLink to='/teams'>Teams</NavLink></li>
                <li><NavLink to='/drivers'>Drivers</NavLink></li>
                <li><NavLink to='/schedule'>Schedule</NavLink></li>
                <li><NavLink to='/tracks'>Tracks</NavLink></li>
            </ul>
           </nav>
        </>
    )
}

export default Navigation
