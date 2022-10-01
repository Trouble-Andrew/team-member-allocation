const SearchBar = ({ filterText, inStockOnly, onFilterTextChange, onInStockOnlyChange }) => {
  return (
    <form>
      <div className="mb-3">
        <label htmlFor="searchBar" className="form-label">
          Search...
        </label>
        <input
          type="text"
          className="form-control"
          id="searchBar"
          aria-describedby="search-bar"
          value={filterText}
          onChange={(e) => onFilterTextChange(e.target.value)}
        />
      </div>
      <div className="mb-3 form-check d-flex">
        <input
          type="checkbox"
          checked={inStockOnly}
          className="form-check-input"
          id="inStock"
          onChange={(e) => onInStockOnlyChange(e.target.checked)}
        />
        <label className="form-check-label ms-auto" htmlFor="inStock">
          Only show products in stock
        </label>
        <button type="submit" className="btn btn-primary ms-auto">
          Submit
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
