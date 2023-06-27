import React from 'react';
import Img1 from '../assets/ContactBkgroundImage.jpeg';
import Img2 from '../assets/Logo.png';
import Img3 from '../assets/aboutImage.jpeg';

const Cakes = () => {
	// Replace the image URLs with your own cake images
	const cakeImages = [
		'https://images.pexels.com/photos/4686833/pexels-photo-4686833.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
		'https://images.pexels.com/photos/1543800/pexels-photo-1543800.jpeg?auto=compress&cs=tinysrgb&w=600',
		'https://images.pexels.com/photos/5468024/pexels-photo-5468024.jpeg?auto=compress&cs=tinysrgb&w=600',
		'https://images.pexels.com/photos/1835765/pexels-photo-1835765.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
	];

	return (
		<div name="cakes" className="w-full py-[4rem]">
			<div className="flex flex-col justify-center px-4 mx-[4rem]">
				<h2 className="text-3xl pt-8 uppercase mt-8">Bespoke Cakes</h2>
				<p className="max-w-[600px] flex pt-6 pb-8">
					Boujie Delights specialises in creating handmade bespoke cakes that
					are both delicious and beautifully crafted. Every cake is made with
					meticulous attention to detail, ensuring a truly delightful experience
					for your special occasion. From birthdays to anniversaries and any
					other memorable event, our cakes are designed to bring joy and elevate
					your celebrations.
				</p>

				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
					{cakeImages.map((imageUrl, index) => (
						<div key={index} className="aspect-w-1 aspect-h-1">
							<img
								src={imageUrl}
								alt="Cake"
								className="object-cover w-full h-full"
							/>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Cakes;
