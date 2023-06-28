import React from 'react';
import { Link } from 'react-scroll';

function About() {
	return (
		<div name="about" className="w-full bg-gray-100">
			<div className="max-w-[1240px] mx-auto px-4 py-[4rem] grid grid-cols-1 md:grid-cols-2 gap-8">
				<div className="md:order-1 flex items-center">
					<img
						src="https://images.pexels.com/photos/4110012/pexels-photo-4110012.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
						alt="About Me"
						className="w-full h-auto object-cover"
					/>
				</div>
				<div className="md:order-2 flex flex-col justify-center">
					<h2 className="text-3xl pt-6 uppercase">About</h2>
					<p className="text-lg py-4">
						My name is Sabrina, and I am a home-based baker and cake decorator
						based in South East London. My passion for baking started in 2021
						when I began baking cakes and treats for family and friends. This
						led me to experiment and have fun with making different types of
						cakes and treats, such as chocolate-covered strawberries,
						cakesicles, sugar cookies, and chocolate smash hearts. Two years on,
						I now have my own buttercream cakes business specializing in
						occasion cakes for birthdays, anniversaries, christenings, baby and
						bridal showers, charity events, and more.
					</p>
					<p className="text-lg pb-4">
						The process of baking and decorating cakes is very therapeutic for
						me. Every order I receive is special as it allows me to learn, grow,
						and trust the process. I am a hardworking and resilient creative who
						takes pride in my work. My aspiration is not only to make tasteful
						and visually pleasing cakes but also to provide an enjoyable and
						memorable experience for everyone who tastes my desserts.
					</p>
					<div className="pt-6">
						<button className="w-40 py-2 px-4 uppercase bg-[#fee3c3] text-black hover:bg-white hover:border-2 hover:border-[#fee3c3]">
							<Link
								to="contact"
								smooth={true}
								offset={-50}
								duration={500}
								className="group flex justify-center items-center cursor-pointer"
							>
								Contact
							</Link>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default About;
