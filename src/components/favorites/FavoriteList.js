import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import "./Favorites.css"

export const FavoriteList = ({searchTermState}) => {
    const [favorites, setFavorite] = useState([])
    const [countries, setCountries] = useState([])
    const [filteredArtists, setFiltered] = useState([])
    const navigate = useNavigate()
    const localWavelandUser = localStorage.getItem("waveland_user")
    const wavelandUserObject = JSON.parse(localWavelandUser)
    const [deleteButton, setDeleteButton] = useState(false)

    useEffect(
        () => {
            fetch(`http://localhost:8088/favorites?_expand=artist&userId=${wavelandUserObject.id}`)
            .then(res => res.json())
            .then((artistArray) => {
                setFavorite(artistArray)
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
            const searchedCountry = countries.filter(country => {
                return country?.name.toLowerCase().startsWith(searchTermState.toLowerCase()) 
            })
            const searchedFilteredFavorites = []
            for (const favorite of favorites) {
                for (const country of searchedCountry) {
                    if (country.id === favorite.artist.countryId) {
                        searchedFilteredFavorites.push(favorite)
                    }
                }
            }
            setFiltered(searchedFilteredFavorites)
        },
        [ searchTermState ]
    )
        

const deleteFavoriteButton = (id) => {
    // event.preventDefault()
    console.log("You clicked the button")
    fetch(`http://localhost:8088/favorites/${id}`, {
        method: "DELETE",
        })
        .then((res) => {
            const button = !deleteButton
            setDeleteButton(button)
        })

        //     .then(() => {
                
        // })

        // .then(() => {
        //     navigate("/favorites")
        // })
    }
    useEffect(
        () => {
            fetch(`http://localhost:8088/favorites?_expand=artist&userId=${wavelandUserObject.id}`)
            .then(res => res.json())
            .then((artistArray) => {
                setFavorite(artistArray)
                setFiltered(artistArray)
            })
        },
        [deleteButton]
        )

                return <>
                
            
                    <h2>Favorite Artists</h2>
            
                    <article className="artists">
                        {
                            filteredArtists.map(
                                (artist) => {
                                    return <section className="artist" key={`Artist--${artist.id}`}>
                                        <>
                                            <div className="image">                                   
                                                <img src={artist.artist.image} alt="image" width={300} height={300}/>
                                            </div>
                                            <h2>{artist.artist.name}</h2>
                                            <button className="favorites" id={`${artist.id}`} onClick={(event) => {
                                                deleteFavoriteButton(parseInt(event.target.id))
                                            }}>Remove Favorite</button>
                                            {/* <div>{ArtistForm}</div> */}
                                            
                                            <h4>{
                                                countries.map(
                                                    (country) => {
                                                        if (artist.artist.countryId === country.id) {
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

        //}       
