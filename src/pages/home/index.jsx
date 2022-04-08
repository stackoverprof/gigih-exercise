import React, { Component } from "react";
import SearchBar from "../../components/SearchBar";
import Gif from "../../components/Gif";
import axios from "axios";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchResult: [],
      searchQuery: "",
    };
  }

  onChange = (e) => {
    this.setState({ searchQuery: e.target.value });
  };

  onSubmit = async (e) => {
    e.preventDefault();

    const params = {
      api_key: process.env.REACT_APP_GIPHY_CLIENT_ID,
      q: this.state.searchQuery,
      limit: 15,
    };

    const result = await axios
      .get("https://api.giphy.com/v1/gifs/search", {
        params,
      })
      .then((res) => res.data.data)
      .catch((err) => console.error(err));

    this.setState({ searchResult: result });
  };

  render() {
    return (
      <header className="App-header">
        <SearchBar
          value={this.state.searchQuery}
          onChange={this.onChange}
          onSubmit={this.onSubmit}
        />
        <div className="container grid grid-cols-3 gap-4">
          {this.state.searchResult.map((item, i) => (
            <Gif title={item.title} url={item.images.fixed_width.url} key={i} />
          ))}
        </div>
      </header>
    );
  }
}

export default Home;
