import React from 'react';

const Gif = ({ url, title }) => {
	return (
		<div className="relative flex-cc overflow-hidden rounded-lg">
			<img src={url} alt={title} className="object-cover full" />
			<div className="absolute flex-cc top-0 left-0 p-6 bg-black bg-opacity-60 opacity-0 hover:opacity-100 full">
				<p className="text-3xl text-center">{title}</p>
			</div>
		</div>
	);
};

export default Gif;
