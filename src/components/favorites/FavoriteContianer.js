import { useState } from "react"
import { FavoriteList } from "./FavoriteList"
import { FavoriteSearch } from "./FavoriteSearch"

export const FavoriteContainer = () => {
    const [searchTerms, setSearchTerms] = useState("")

    return <>
        <FavoriteSearch setSearchTerms={setSearchTerms}/>
        <FavoriteList searchTermState={searchTerms}/>    
    </>
}