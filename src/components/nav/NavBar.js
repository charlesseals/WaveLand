import { CustomerNav } from "./CustomerNav"
import { EmployeeNav } from "./EmployeeNav"
import "./NavBar.css"

export const NavBar = () => {
    const localHoneyUser = localStorage.getItem("honey_user")
    const honeyUserObject = JSON.parse(localHoneyUser)

    if (honeyUserObject.staff) {
        //Return Employee Views
        return <>
            <EmployeeNav />
            
        </>

    }
    else {
        // Return Customer Views
        return <CustomerNav />
    }
}

