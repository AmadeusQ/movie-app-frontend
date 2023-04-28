import "./searchPanel.css";

function SearchPanel(props) {
  const { searchValue, onSearchValueChange } = props;

  return (
    <div className="searchPanel">
      <input
        type={"text"}
        placeholder={"Search movies"}
        value={searchValue}
        onChange={onSearchValueChange}
        className="searchInput"
      />
    </div>
  );
}

export default SearchPanel;
