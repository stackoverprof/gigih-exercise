import axios from "axios";
import React, { useEffect, useState } from "react";
import Gif from "../../components/Gif";

const Trending = () => {
  const [trendingResult, setTrendingResult] = useState([]);

  useEffect(() => {
    (async () => {
      const params = {
        api_key: process.env.REACT_APP_GIPHY_CLIENT_ID,
        limit: 15,
      };

      const result = await axios
        .get("https://api.giphy.com/v1/gifs/trending", {
          params,
        })
        .then((res) => res.data.data)
        .catch((err) => console.error(err));

      setTrendingResult(result);
    })();
  }, []);

  return (
    <div className="bg-base flex-sc col">
      <h1 className="text-4xl font-bold my-16">
        <span className="text-info">#Trending</span> GIFs
      </h1>
      <div className="container grid grid-cols-3 gap-4">
        {trendingResult?.map((item, i) => (
          <Gif
            title={item.title}
            url={item.images.fixed_width.url}
            key={item.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Trending;
