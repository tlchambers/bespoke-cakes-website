import React from 'react';
import Img1 from '../assets/ContactBkgroundImage.jpeg';
import Img2 from '../assets/Logo.png';
import Img3 from '../assets/aboutImage.jpeg';

function Cards() {
	return (
		<div className="w-full py-[10rem] px-4">
			<div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
				<div className="w-full shadow-xl flex flex-col hover:scale-105 duration-300">
					<img className="rounded-t-lg" src={Img1} alt="img" />
					<h2 className="text-2xl font-bold text-center pt-4">Flavours</h2>
					<div>
						<ul className="text-center font-medium">
							<li className="py-2 border-b mx-4 mt-2">Vanilla</li>
							<li className="py-2 border-b mx-4">Chocolate</li>
							<li className="py-2 border-b mx-4">3</li>
							<li className="py-2 border-b mx-4 pb-3">4</li>
						</ul>
					</div>
				</div>

				<div className="w-full shadow-xl flex flex-col hover:scale-105 duration-300">
					<img className="rounded-t-lg" src={Img1} alt="img" />
					<h2 className="text-2xl font-bold text-center pt-4">Flavours</h2>
					<div>
						<ul className="text-center font-medium">
							<li className="py-2 border-b mx-4 mt-2">Vanilla</li>
							<li className="py-2 border-b mx-4">Chocolate</li>
							<li className="py-2 border-b mx-4">3</li>
							<li className="py-2 border-b mx-4 pb-3">4</li>
						</ul>
					</div>
				</div>

				<div className="w-full shadow-xl flex flex-col hover:scale-105 duration-300">
					<img className="rounded-t-lg" src={Img1} alt="img" />
					<h2 className="text-2xl font-bold text-center pt-4">Flavours</h2>
					<div>
						<ul className="text-center font-medium">
							<li className="py-2 border-b mx-4 mt-2">Vanilla</li>
							<li className="py-2 border-b mx-4">Chocolate</li>
							<li className="py-2 border-b mx-4">3</li>
							<li className="py-2 border-b mx-4 pb-3">4</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Cards;
