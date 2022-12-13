import { UserNav } from "./UserNav"
import "./NavBar.css"

export const NavBar = () => {
    const localWavelandUser = localStorage.getItem("waveland_user")
    const wavelandUserObject = JSON.parse(localWavelandUser)

    if (wavelandUserObject) {
        return <UserNav />
    }
}

