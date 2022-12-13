export const CountrySelect = ({country, setCountryObj}) => {
    return <option value={country.id}>{country.name}</option>
}