import { Link, useNavigate } from "react-router-dom"
import "./NavBar.css"

export const UserNav = () => {
    const navigate = useNavigate()

    return (
        <ul className="navbar">
            <li className="navbar__item active">
                <Link className="navbar__link" to="/artists">Artists</Link>
            </li>
            <li className="navbar__item active">
                <Link className="navbar__link" to="/favorites">Favorites</Link>
            </li>
            <li className="navbar__item navbar_logout">
                <Link className="navbar__link" to="/profile">Profile</Link>
            </li>

            {
                localStorage.getItem("waveland_user")
                    ? <li className="navbar__item navbar__logout">
                        <Link className="navbar__link" to="" onClick={() => {
                            localStorage.removeItem("waveland_user")
                            navigate("/", {replace: true})
                        }}>Logout</Link>
                    </li>
                    : ""
            }
        </ul>
    )
}

