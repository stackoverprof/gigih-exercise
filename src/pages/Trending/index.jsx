import axios from 'axios';
import React, { useEffect, useState } from 'react';
import MainLayout from 'src/components/Layouts/MainLayout';
import Gif from '../../components/Gif';

const Trending = () => {
	const [trendingResult, setTrendingResult] = useState([]);

	useEffect(() => {
		(async () => {
			const params = {
				api_key: process.env.REACT_APP_GIPHY_CLIENT_ID,
				limit: 15,
			};

			const result = await axios
				.get('https://api.giphy.com/v1/gifs/trending', {
					params,
				})
				.then((res) => res.data.data)
				.catch((err) => console.error(err));

			setTrendingResult(result);
		})();
	}, []);

	return (
		<MainLayout title="Trending" className="container flex-sc col">
			<h1 className="my-16 text-4xl font-bold">
				<span className="text-info">#Trending</span> GIFs
			</h1>
			<div className="grid grid-cols-3 gap-4 px-24 w-full">
				{trendingResult?.map((item) => (
					<Gif title={item.title} url={item.images.fixed_width.url} key={item.id} />
				))}
			</div>
		</MainLayout>
	);
};

export default Trending;
