import React from "react";
import Form from "../../components/Form";
import Gif from "../../components/Gif";
import DATA_GIFS from "../../data/gifs";

const Home = () => {
  const data = DATA_GIFS;
  const filtered_data = data.filter((item) => item.rating === "g");
  return (
    <header className="App-header">
      <Form />
      {filtered_data.map((item, i) => (
        <Gif title={item.title} url={item.url} key={i} />
      ))}
    </header>
  );
};

export default Home;
