import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { ArtistForm } from "./ArtistForm"
import "./Artists.css"
// import { HeartSwitch } from '@anatoliygatt/heart-switch';

export const ArtistList = ({searchTermState}) => {
    const [artists, setArtists] = useState([])
    const [countries, setCountries] = useState([])
    const [filteredArtists, setFiltered] = useState([])
    
    const navigate = useNavigate()
    
    const localWavelandUser = localStorage.getItem("waveland_user")
    const wavelandUserObject = JSON.parse(localWavelandUser)

    useEffect(
        () => {
            fetch(`http://localhost:8088/artists?_expand=country`)
            .then(res => res.json())
            .then((artistArray) => {
                setArtists(artistArray)
                setFiltered(artistArray)
            })
        },
        []
        )
    useEffect(
        () => {
            fetch(`http://localhost:8088/countries`)
            .then(res => res.json())
            .then((countriesArray) => {
                setCountries(countriesArray)
            })
        },
        []
        )

    useEffect(
        
        () => {
            const searchedArtists = artists.filter(artist => {
                return artist?.country?.name.toLowerCase().startsWith(searchTermState.toLowerCase())
            })
            setFiltered(searchedArtists)
        },
        [ searchTermState ]
    )
        
// let icon = document.querySelector('ion-icon');
//     icon.onclick = function(){
//     icon.classList.toggle('active');
// }

// function Example() {
//     const [checked, setChecked] = useState(false);}

const handleFavoriteButton = (event, artistObj) => {
    event.preventDefault()
    console.log("You clicked the button")
    // TODO: Create the object to be saved to the API
    const newFavorite = {
        userId: wavelandUserObject.id,
        artistId: artistObj.id
    }
        

    // TODO: Perform the fetch() to POST the object to the API
    return fetch(`http://localhost:8088/favorites`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newFavorite)
    })
        .then(res => res.json())
        .then(() => {
            navigate("/favorites")
        })
}


                return <>
                
            
                    <h2>List of Artists</h2>
            
                    <article className="artists">
                        {
                            filteredArtists.map(
                            // artists.map(

                                (artist) => {
                                    return <section className="artist" key={`Artist--${artist.id}`}>
                                        {/* <div>{artist.image}</div> */}
                                        <>
                                            <div className="image">                                   
                                                <img src={artist.image} alt="image" width={300} height={300}/>
                                            </div>
                                            <h2>{artist.name}</h2>
                                            <button className="favorites" onClick={(event) => {
                                                handleFavoriteButton(event, artist)
                                            }}>Favorite</button>
                                            {/* <div>{ArtistForm}</div> */}
                                            
                                            <h4>{
                                                countries.map(
                                                    (country) => {
                                                        if (artist.countryId === country.id) {
                                                            return country.name
                                                        }
                                                    }
                                                )
                                                }</h4>
                                        </>
                                    </section>
                                }
                            )
                        }
                    </article>
            
                </>
            }

        
