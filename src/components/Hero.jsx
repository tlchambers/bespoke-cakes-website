import React from 'react';
import { Link } from 'react-scroll';

function Hero() {
	return (
		<div name="home" className="w-full h-screen flex flex-col justify-between">
			{/* background Image */}
			<img
				src="https://images.unsplash.com/photo-1595272568891-123402d0fb3b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MjB8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
				alt=""
				className="w-full h-full object-cover"
			/>
			<div className="grid md:grid-cols-2 mx-w-[1240px] m-auto">
				<div className="absolute top-[26%] flex flex-col ">
					<h3>Welcome To</h3>
					<h2 className="md:text-4xl sm:text-4xl text-6xl md:py-4 py-2">
						Boujie Delights
					</h2>
					<p className="max-w-[400px] text-lg flex">
						When it comes to design, the sky is the limit! Whether you have a
						specific theme or color scheme in mind, or simply want something
						unique and eye-catching, we would love to create a cake that
						perfectly captures your vision.
					</p>
					<button className="bg-black bg-opacity-30 text-white uppercase hover:bg-black hover:border-black w-[140px] p-2 mt-6 rounded-full">
						<Link
							to="cakes"
							smooth={true}
							offset={-200}
							duration={500}
							className="cursor-pointer"
						>
							EXPLORE
						</Link>
					</button>
				</div>
			</div>
		</div>
	);
}

export default Hero;
