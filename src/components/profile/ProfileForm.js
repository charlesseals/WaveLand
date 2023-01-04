import { useEffect, useState } from "react"


export const ProfileForm = () => {
    // TODO: Provide initial state for profile
    const [profile, updateProfile] = useState({})
    
    
    const localWavelandUser = localStorage.getItem("waveland_user")
    const wavelandUserObject = JSON.parse(localWavelandUser)
    
    // TODO: Get employee profile info from API and update state
    useEffect(() => {
        fetch(`http://localhost:8088/users?id=${wavelandUserObject.id}`)
        .then(res => res.json())
        .then((data) => {
            const userObjects = data[0]
                updateProfile(userObjects)
            }  
        )
        }, [])
    
    const [feedback, setFeedback] = useState("")
    useEffect(() => {
        if (feedback !== "") {
            // Clear feedback to make entire element disappear after 3 seconds
            setTimeout(() => setFeedback(""), 3000);
        }
    }, [feedback])

    
    const handleSaveButtonClick = (event) => {
        event.preventDefault()

        /*
            TODO: Perform the PUT fetch() call here to update the profile.
            Navigate user to home page when done.
        */
        return fetch(`http://localhost:8088/users/${profile.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(profile)
        })
            .then(res => res.json())
            .then(() => {
                setFeedback("User profile successfully saved")
            })
    }



    console.log(profile.userName)
    return (
        <>
        <div className={`${feedback.includes("Error") ? "error" : "feedback"} ${feedback === "" ? "invisible" : "visible"}`}>
            {feedback}
        </div>
        <form className="profile">
            <h3 className="profile__title">User Profile Information</h3>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="userName">Change username:</label>
                    <aside>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        value={profile.userName}
                        onChange={
                            (evt) => {
                                // TODO: Update username property
                                    const copy = {...profile}
                                    copy.userName = evt.target.value
                                    updateProfile(copy)
                            }
                        } />
                    </aside>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="email">Change email:</label>
                    <aside>
                    <input type="text"
                        className="form-control"
                        value={profile.email}
                        onChange={
                            (evt) => {
                                // TODO: Update email property
                                const copy = {...profile}
                                    copy.email = evt.target.value
                                    updateProfile(copy)
                            }
                        } />

                    </aside>
                </div>
            </fieldset>
            <button
                onClick={(clickEvent) => handleSaveButtonClick(clickEvent)}
                className="btn btn-primary">
                Save Updated Profile
            </button>
            
        </form>
        </>
    )
}