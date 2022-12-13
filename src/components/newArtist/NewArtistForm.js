import { useEffect, useState } from "react"
import { CountrySelect } from "./CountrySelect"
import { GenreSelect } from "./GenreSelect"


export const NewArtistForm = () => {
    // TODO: Provide initial state for profile
    // const [completeArtist, setCompleteArtist] = useState({})
    const [newArtistObj, setNewArtistObj] = useState({})
    const [genres, setGenres] = useState([])
    const [countries, setCountries] = useState([])
    const [countryObj, setCountryObj] = useState(0)
    // const [artists, setArtists] = useState([])
    // const [filteredArtists, setFiltered] = useState([])
    // const [favorites, setFavorites] = useState({})
    // const [newFavorite, setNewFavorite] = useState(false)
    // const navigate = useNavigate()
    

    const localWavelandUser = localStorage.getItem("waveland_user")
    const wavelandUserObject = JSON.parse(localWavelandUser)

    console.log(countries)
    
        

    // useEffect(() => {
    //     fetch(`http://localhost:8088/users?id=${wavelandUserObject.id}`)
    //     .then(res => res.json())
    //     .then((data) => {
    //         const userObjects = data[0]
    //             updateNewArtist(userObjects)
    //         }  
    //     )
    //     }, [])

    useEffect(() => {
        fetch(`http://localhost:8088/countries`)
        .then(res => res.json())
        .then((data) => {
            const countryObjects = data
                setCountries(countryObjects)
            }  
        )
        }, [])
    
    useEffect(() => {
        fetch(`http://localhost:8088/genre`)
        .then(res => res.json())
        .then((data) => {
            const genreObjects = data
                setGenres(genreObjects)
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


        // const createdArtist = {
        //     countries.
        // }



        /*
            TODO: Perform the PUT fetch() call here to update the profile.
            Navigate user to home page when done.
        */
        return fetch(`http://localhost:8088/artists`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newArtistObj)
        })
            .then(res => res.json())
            .then(() => {
                setFeedback("New Artist Successfully Saved")
            })
    }



    // console.log(newArtist.name)
    return (
        <>
        <div className={`${feedback.includes("Error") ? "error" : "feedback"} ${feedback === "" ? "invisible" : "visible"}`}>
            {feedback}
        </div>
        <form className="newArtist">
            <h2 className="newArtist__title">Add A New Artist</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="newArtistName">Artist Name:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        value={newArtistObj.name}
                        onChange={
                            (evt) => {
                                // TODO: Update username property
                                    const copy = {...newArtistObj}
                                    copy.name = evt.target.value
                                    setNewArtistObj(copy)
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="newArtistImage">Add Image URL:</label>
                    <input type="text"
                        className="form-control"
                        value={newArtistObj.image}
                        onChange={
                            (evt) => {
                                // TODO: Update email property
                                const copy = {...newArtistObj}
                                    copy.image = evt.target.value
                                    setNewArtistObj(copy)
                            }
                        } />
                </div>
            </fieldset>
            <aside>
                <select onChange={
                    (event) => {
                        const copy = { ...newArtistObj }
                        copy.countryId = parseInt(event.target.value)
                        setNewArtistObj(copy)
                    }
                } className="form-group">
                    <option value={0}>Select Country</option>
                    {countries.map((country) => <option value={country.id}>{country.name}</option>)}
                </select>
            </aside>
            <aside>
                <select onChange={
                    (event) => {
                        const copy = { ...newArtistObj }
                        copy.genreId = parseInt(event.target.value)
                        setNewArtistObj(copy)
                    }
                } className="form-group">
                    <option value={0}>Select Genre</option>
                    {genres.map((genre) => <option value={genre.id}>{genre.name}</option>)}
                </select>
            </aside>
            <button
                onClick={(clickEvent) => handleSaveButtonClick(clickEvent)}
                className="btn btn-primary">
                Save New Artist
            </button>
            
        </form>
        </>
    )
}