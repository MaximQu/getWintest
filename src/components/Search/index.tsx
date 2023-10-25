import './styles.scss';

const Search = () => {
  return (
    <div>
        <input type="text" name='pokemonSearch' placeholder='Enter pokemon' required />
        <button type='submit'>Search</button>
    </div>
  )
}

export default Search
