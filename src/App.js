import imageSearch from "./api";
import SearchBar from "./components/SearchBar";
import ImageList from "./components/ImageList";
import { useState } from "react";

function App() {
  const [searchData, setSearchData] = useState([]);
  const submitHandler = async (keyword) => {
    const tempData = await imageSearch(keyword);
    setSearchData(tempData);
    console.log("tempData", tempData);
  };
  return (
    <div className="App">
      <SearchBar submitHandler={submitHandler} />
      <ImageList images={searchData} />
    </div>
  );
}

export default App;
