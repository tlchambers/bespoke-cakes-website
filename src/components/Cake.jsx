import React from 'react';

function Cake({ imageUrl, typeOfCake }) {
	return (
		<div>
			<img
				src={imageUrl}
				alt={typeOfCake}
				className="object-cover w-full h-full"
			/>
		</div>
	);
}

export default Cake;
