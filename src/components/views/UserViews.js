import { Outlet, Route, Routes } from "react-router-dom"
import { Profile } from "../profile/Profile"
import { ArtistForm } from "../artists/ArtistForm"
import { FavoriteList } from "../favorites/FavoriteList"
import { ArtistContainer } from "../artists/ArtistContainer"
import { ArtistSearch } from "../artists/ArtistSearch"
import { FavoriteContainer } from "../favorites/FavoriteContianer"
import { NewArtist } from "../newArtist/NewArtist"

export const UserViews = () => {
	return (
        <Routes>
            <Route path="/" element={
                <>
                    <h1>WaveLand</h1>
                    <div>Make Listening an Adventure</div>

                    <Outlet />
                </>
            }>

                {/* <Route path="favorites" element={ <FavoriteList /> } /> */}
                <Route path="favorites" element={ <FavoriteContainer /> } />
                <Route path="artists" element={ <ArtistContainer /> } />
                {/* <Route path="atrists" element={ <ArtistForm /> } /> */}
                {/* <Route path="atrist/create" element={ <ArtistForm /> } /> */}
                <Route path="profile" element={ <Profile /> } />
                <Route path="newArtist" element={ <NewArtist /> } />

                {/* <Route path="artists" element={ <ArtistSearch /> } /> */}
            </Route>
        </Routes>
    )
}