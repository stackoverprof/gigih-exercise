import React from "react";

const Gif = ({ url, title }) => {
  return (
    <div className="full flex-cc rounded-lg overflow-hidden relative">
      <img src={url} alt={title} className="full object-cover" />
      <div className="absolute p-6 hover:opacity-100 opacity-0 full top-0 left-0 flex-cc bg-black bg-opacity-60">
        <p className="text-3xl">{title}</p>
      </div>
    </div>
  );
};

export default Gif;
