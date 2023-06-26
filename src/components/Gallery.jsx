import React from 'react';
import Img1 from '../assets/ContactBkgroundImage.jpeg';
import Img2 from '../assets/Logo.png';
import Img3 from '../assets/aboutImage.jpeg';

function Gallery() {
	return (
		<div
			name="gallery"
			className="max-w-[1140px] m-auto w-full px-4 pt-[12rem] py-16"
		>
			<h2 className="md:text-4xl sm:text-4xl md:py-6 py-4 text-center uppercase">
				Gallery
			</h2>
			<div className="grid sm:grid-cols-5 gap-4">
				<div className="sm:col-span-3 col-span-2 row-span-2">
					<img className="w-full h-full object-cover" src={Img1} alt="" />
				</div>
				<div>
					<img className="w-full h-full object-cover" src={Img2} alt="" />
				</div>
				<div>
					<img className="w-full h-full object-cover" src={Img3} alt="" />
				</div>
				<div>
					<img className="w-full h-full object-cover" src={Img1} alt="" />
				</div>
				<div>
					<img className="w-full h-full object-cover" src={Img2} alt="" />
				</div>
			</div>
		</div>
	);
}

export default Gallery;
