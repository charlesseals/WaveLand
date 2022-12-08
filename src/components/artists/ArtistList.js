import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import "./Artists.css"
// import { HeartSwitch } from '@anatoliygatt/heart-switch';


export const ArtistList = () => {
    const [artists, setArtists] = useState([])
    const [countries, setCountries] = useState([])

    // const localWavelandUser = localStorage.getItem("waveland_user")
    // const wavelandUserObject = JSON.parse(localWavelandUser)

    useEffect(
        () => {
            fetch(`http://localhost:8088/artists`)
            .then(res => res.json())
            .then((artistArray) => {
                setArtists(artistArray)
            })
        },
        []
        )
    useEffect(
        () => {
            fetch(`http://localhost:8088/country`)
            .then(res => res.json())
            .then((countriesArray) => {
                setCountries(countriesArray)
            })
        },
        []
        )
        
// let icon = document.querySelector('ion-icon');
//     icon.onclick = function(){
//     icon.classList.toggle('active');
// }

// function Example() {
//     const [checked, setChecked] = useState(false);}

                return <>
                
            
                    <h2>List of Artists</h2>
            
                    <article className="artists">
                        {
                            artists.map(
                                (artist) => {
                                    return <section className="artist" key={`Artist--${artist.id}`}>
                                        {/* <div>{artist.image}</div> */}
                                        <>
                                            <div className="image">                                   
                                                <img src={artist.image} alt="image" width={300} height={300}/>
                                            </div>
                                            <h2>{artist.name}</h2>
                                            <button className="favorites">Favorite</button>
                                            
                                            {/* <HeartSwitch
                                            size="lg"
                                            inactiveTrackFillColor="#cffafe"
                                            inactiveTrackStrokeColor="#22d3ee"
                                            activeTrackFillColor="#06b6d4"
                                            activeTrackStrokeColor="#0891b2"
                                            inactiveThumbColor="#ecfeff"
                                            activeThumbColor="#ecfeff"
                                            checked={checked}
                                            onChange={(event) => {
                                                setChecked(event.target.checked);
                                            }}
                                            /> */}
                                                    {/* <div class='large-font text-center top-20'>
                                                        <ion-icon name="heart">
                                                            <div class='red-bg'></div>
                                                        </ion-icon>
                                                    </div> */}
                                            
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

        
