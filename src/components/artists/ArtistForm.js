// import { useState } from "react"
// import { useNavigate } from "react-router-dom"
// import { ApplicationViews } from "../views/ApplicationViews"

// export const ArtistForm = () => {
//     /*
//         TODO: Add the correct default properties to the
//         initial state object
//     */
//     const [artist, update] = useState({
//         description: "",
//         emergency: false
//     })
//     /*
//         TODO: Use the useNavigation() hook so you can redirect
//         the user to the Artist list
//     */
//     const navigate = useNavigate()

//     const localWavelandUser = localStorage.getItem("waveland_user")
//     const wavelandUserObject = JSON.parse(localWavelandUser)

//     const handleSaveButtonClick = (event) => {
//         event.preventDefault()
//         console.log("You clicked the button")
//         // TODO: Create the object to be saved to the API
//         /*
//             {
//             "id": 1,
//             "userId": 3,
//             "description": "Saepe ex sapiente deserunt et voluptas fugiat vero quasi. Ipsam est non ipsa. Occaecati rerum ipsa consequuntur. Ratione commodi unde sint non rerum. Sit quia et aut sunt.",
//             "emergency": false,
//             "dateCompleted": "Fri Apr 29 2022 14:02:20 GMT-0500 (Central Daylight Time)"
//             }
//         */
//         const artistToSendToAPI = {
//             userId: wavelandUserObject.id,
//             description: artist.description,
//             emergency: artist.emergency,
//             dateCompleted: ""
//         }
            

//         // TODO: Perform the fetch() to POST the object to the API
//         return fetch(`http://localhost:8088/serviceArtists`, {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify(artistToSendToAPI)
//         })
//             .then(res => res.json())
//             .then(() => {
//                 navigate("/Artists")
//             })
//     }

//     return (
//         <form className="ArtistForm">
//             <h2 className="ArtistForm__title">New Service Artist</h2>
//             <fieldset>
//                 <div className="form-group">
//                     <label htmlFor="description">Description:</label>
//                     <input
//                         required autoFocus
//                         type="text"
//                         className="form-control"
//                         placeholder="Brief description of problem"
//                         value={artist.description}
//                         onChange={
//                             (evt) => {
//                                 const copy = {...artist}
//                                 copy.description = evt.target.value
//                                 update(copy)
//                             }
//                         } />
//                 </div>
//             </fieldset>
//             <fieldset>
//                 <div className="form-group">
//                     <label htmlFor="name">Emergency:</label>
//                     <input type="checkbox"
//                         value={artist.emergency}
//                         onChange={
//                             (event) => {
//                                 const copy = {...artist}
//                                 copy.emergency = event.target.checked
//                                 update(copy)
//                             }
//                         } />
//                 </div>
//             </fieldset>
//             <button 
//                 onClick={(clickEvent) => handleSaveButtonClick(clickEvent)}
//                 className="btn btn-primary">
//                     Submit Artist
//             </button>
//         </form>
//     )
// }