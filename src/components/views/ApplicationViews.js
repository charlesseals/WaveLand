import { UserViews } from "./UserViews"

export const ApplicationViews = () => {

    const localWavelandUser = localStorage.getItem("waveland_user")
    const wavelandUserObject = JSON.parse(localWavelandUser)

    if (wavelandUserObject) {
        return <UserViews />
    }
}
