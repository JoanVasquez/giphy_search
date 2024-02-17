import { useState } from "react";

const Search = ({ setSearch }: any) => {
  const [searchTwo, setSearchTwo] = useState("");

  return (
    <div className="col">
      <label>Search: </label>
      <input type="text" value={searchTwo} onChange={(event) => setSearchTwo(event.target.value)} />
      <button onClick={() => setSearch(searchTwo)}>Click!</button>
    </div>
  );
};

export default Search;
