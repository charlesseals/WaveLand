import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import "./Artists.css"

export const ArtistList = ({searchTermState}) => {
    const [artists, setArtists] = useState([])
    const [countries, setCountries] = useState([])
    const [filteredArtists, setFiltered] = useState([])
    const [favorites, setFavorites] = useState([])  
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
    useEffect(
        () => {
            fetch(`http://localhost:8088/favorites`)
            .then(res => res.json())
            .then((favoritesArray) => {
                setFavorites(favoritesArray)
            })
        },
        []
        )
    

const matchedArtist = (event, artistObj) => {
    if (favorites.find((favorite) => 
    artistObj.id === favorite.artistId
    )){
        window.alert(`❌ Artist already in Favorites ❌`)
    } else {
        window.alert(`✅ Added to Favorites ✅`)

        handleFavoriteButton(artistObj)
    }
}

const handleFavoriteButton = (artistObj) => {

    // favObj.preventDefault()
    
        // if (artistObj.id !== favorite.id) {
            const newFavorite = {
                userId: wavelandUserObject.id,
                artistId: artistObj.id
            }
            fetch(`http://localhost:8088/favorites`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newFavorite)
            })
            .then(res => res.json())
            // .then(() => {
            //     navigate("/artists")
            // })
            .then(() => {
                fetch(`http://localhost:8088/favorites`)
                .then(res => res.json())
                .then((favoritesArray) => {
                    setFavorites(favoritesArray)
                })
            })
            console.log("Artist Added to Favorites List")
    
        }


                return (
                    <>

                    <h2>List of Artists</h2>
            
                    <article className="artists">
                        {
                            filteredArtists.map(

                                (artist) => {
                                    return <section className="artist" key={`Artist--${artist.id}`}>
                                        <>
                                            <div className="image">                                   
                                                <img src={artist.image} alt="image" width={300} height={300}/>
                                            </div>
                                            <h2>{artist.name}</h2>
                                            <button className="favorites" onClick={(event) => {
                                                
                                                            // handleFavoriteButton(event, artist)
                                                            matchedArtist(event, artist)
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
            
            
                )
}
        
