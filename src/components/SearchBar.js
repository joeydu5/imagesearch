import React from "react";
import { useState } from "react";

const SearchBar = ({ submitHandler }) => {
  const [keyword, setKeyword] = useState("");
  const onchangeHandler = (e) => {
    setKeyword(e.target.value);
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    submitHandler(keyword);
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input value={keyword} onChange={onchangeHandler} />
      </form>
    </div>
  );
};

export default SearchBar;
