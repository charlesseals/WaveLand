export const FavoriteSearch = ({ setSearchTerms }) => {
    return (
        <div>
            <input 
                onChange={
                    (changeEvent) => {
                        setSearchTerms(changeEvent.target.value)
                    }
                }
            type="text" placeholder="Enter Country Name" />
        </div>
    )
}