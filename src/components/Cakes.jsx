import React from 'react';
import Cake from './Cake';

const Cakes = () => {
	return (
		<div name="cakes" className="w-full">
			<div className="max-w-[1240px] mx-auto flex flex-col justify-center px-4 py-[4rem]">
				<h2 className="text-3xl uppercase">Bespoke Cakes</h2>
				<p className="max-w-[600px] flex text-lg pt-6 pb-8 sm:justify-items-end">
					Beautifully Baked By Ess specialises in creating handmade bespoke
					cakes that are both delicious and beautifully crafted. Every cake is
					made with meticulous attention to detail, ensuring a truly delightful
					experience for your special occasion. From birthdays to anniversaries
					and any other memorable event, our cakes are designed to bring joy and
					elevate your celebrations.
				</p>

				<div className="grid grid-cols-1 sm:grid-cols-4 md:grid-cols-2 lg:grid-cols-2 gap-4">
					<Cake
						imageUrl="https://images.pexels.com/photos/4686833/pexels-photo-4686833.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
						typeOfCake="Berry Cake"
					/>
					<Cake
						imageUrl="https://images.pexels.com/photos/1543800/pexels-photo-1543800.jpeg?auto=compress&cs=tinysrgb&w=600"
						typeOfCake="Matcha Cake"
					/>
					<Cake
						imageUrl="https://images.pexels.com/photos/5468024/pexels-photo-5468024.jpeg?auto=compress&cs=tinysrgb&w=600"
						typeOfCake="Chocolate Cake"
					/>
					<Cake
						imageUrl="https://images.pexels.com/photos/1835765/pexels-photo-1835765.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
						typeOfCake="Birthday Cake"
					/>
				</div>
			</div>
		</div>
	);
};

export default Cakes;
