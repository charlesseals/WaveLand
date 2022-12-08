import { Outlet, Route, Routes } from "react-router-dom"
import { Profile } from "../profile/Profile"
import { ArtistForm } from "../artists/ArtistForm"
import { ArtistList } from "../artists/ArtistList"
import { ArtistContainer } from "../artists/ArtistContainer"
import { ArtistSearch } from "../artists/ArtistSearch"

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

                {/* <Route path="artists" element={ <ArtistList /> } /> */}
                <Route path="artists" element={ <ArtistContainer /> } />
                <Route path="atrist/create" element={ <ArtistForm /> } />
                <Route path="profile" element={ <Profile /> } />
                {/* <Route path="artists" element={ <ArtistSearch /> } /> */}
            </Route>
        </Routes>
    )
}