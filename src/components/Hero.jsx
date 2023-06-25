import React from 'react';

function Hero() {
	return (
		<div className="max-w-[800px] mt-[96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
			<p>Welcome To</p>
			<h1 className="md:text-6xl sm:text-6xl text-4xl font-bold md:py-6">
				Boujie Delights
			</h1>
			<button className="bg-[#00df9a] w-[120px] rounded-lg font-serif my-6 mx-auto py-3">
				<a href="/">Explore Cakes</a>
			</button>
		</div>
	);
}

export default Hero;
