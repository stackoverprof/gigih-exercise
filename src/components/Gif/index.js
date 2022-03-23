import React from "react";

const Gif = ({ url, title }) => {
  return <img src={url} alt={title} className="image-gif" />;
};

export default Gif;
