import { useState } from "react"
import { ArtistList } from "./ArtistList"
import { ArtistSearch } from "./ArtistSearch"

export const ArtistContainer = () => {
    const [searchTerms, setSearchTerms] = useState("")

    return <>
        <ArtistSearch setterFunction={setSearchTerms}/>
        <ArtistList searchTermState={searchTerms}/>    
    </>
}