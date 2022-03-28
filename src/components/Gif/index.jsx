import React from "react";

const Gif = ({ url, title }) => {
  console.log(title, url);
  return <img src={url} alt={title} className="image-gif" />;
};

export default Gif;
