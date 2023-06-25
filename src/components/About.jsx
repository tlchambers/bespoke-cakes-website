import React from 'react';
import Img from '../assets/aboutImage.jpeg';

function About() {
	return (
		<div className="w-full">
			<div className="max-w-[1240px] mx-auto grid md:grid-cols-2 gap-6">
				<img
					className="w-[800px] mx-auto my-2"
					src={Img}
					alt="/about image page"
				/>
				<div className="flex flex-col justify-center">
					<h1 className="text-4xl">About</h1>
					<p className="md:text sm:tex-3xl text-2md py-2">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
						aliquam in neque qui, nobis harum obcaecati excepturi debitis minus
						voluptates incidunt, enim magni est ad laboriosam ratione recusandae
						voluptas provident?
					</p>
					<button className="bg-[#00df9a] w-[120px] rounded-lg font-serif my-6 mx-auto md:mx-0 py-3">
						<a href="/contact">Contact</a>
					</button>
				</div>
			</div>
		</div>
	);
}

export default About;
