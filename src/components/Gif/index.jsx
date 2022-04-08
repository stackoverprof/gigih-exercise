import React from "react";

const Gif = ({ url, title }) => {
  console.log(title, url);
  return <img src={url} alt={title} className="full object-cover rounded-lg" />;
};

export default Gif;
