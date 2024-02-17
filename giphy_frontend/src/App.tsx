import { useSelector } from "react-redux";
import { useThunk } from "./hooks/useThunk";
import { fetchGiphy } from "./store/thunks/fetchGiphy";
import { useEffect, useState } from "react";
import Grid from "./components/Grid";
import Search from "./components/Search";

function App() {
  const [doFetchGiphy] = useThunk(fetchGiphy);
  const { data, isFetching, error } = useSelector((state: any) => state.giphy);
  const [offset, setOffset] = useState(20);
  const [search, setSearch] = useState("test");

  useEffect(() => {
    doFetchGiphy({ offset, search: search });
  }, [offset]);

  useEffect(() => {
    doFetchGiphy({
      offset: 0,
      search: search,
    });
  }, [search])

  const handleLoadMore = () => {
    setOffset(offset + 20);
  };


  return (
    <div className="container">
      <Search setSearch={setSearch} />
      {isFetching ? <span>Loading...</span> : <Grid data={data} />}
      <button onClick={handleLoadMore}>Load More!</button>
    </div>
  );
}

export default App;
