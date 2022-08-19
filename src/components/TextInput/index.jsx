export const TextInput = (props, { searchValue, handleChange, }) => {
  return (

    <input 
    className={props.className}
    onChange={handleChange}
    value={searchValue}
    type="search" 
    />  

    )
}