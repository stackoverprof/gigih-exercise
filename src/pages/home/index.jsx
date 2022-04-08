import React, { Component, useState } from "react";
import SearchBar from "../../components/SearchBar";
import Gif from "../../components/Gif";
import axios from "axios";
import { setSearchResult, useHome } from "../../core/redux/reducer/home";
import { useDispatch } from "react-redux";

const Home = () => {
  const { searchResult } = useHome();
  const [searchQuery, setSearchQuery] = useState("");

  const dispatch = useDispatch();

  const onChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const params = {
      api_key: process.env.REACT_APP_GIPHY_CLIENT_ID,
      q: searchQuery,
      limit: 15,
    };

    const result = await axios
      .get("https://api.giphy.com/v1/gifs/search", {
        params,
      })
      .then((res) => res.data.data)
      .catch((err) => console.error(err));

    dispatch(setSearchResult(result));
  };

  return (
    <header className="App-header">
      <SearchBar value={searchQuery} onChange={onChange} onSubmit={onSubmit} />
      <div className="container grid grid-cols-3 gap-4">
        {searchResult.map((item, i) => (
          <Gif title={item.title} url={item.images.fixed_width.url} key={i} />
        ))}
      </div>
    </header>
  );
};

export default Home;
