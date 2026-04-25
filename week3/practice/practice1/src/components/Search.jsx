const Search = ({ search, onSearchChange, onSearchClick }) => {
 return (
    <>
        <input type='text' value={search} onChange={onSearchChange} />
        <button onClick={onSearchClick}>검색</button>
    </>
 );
};

export default Search;