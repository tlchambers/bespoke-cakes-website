import React from 'react';
import Img from '../assets/aboutImage.jpeg';

function About() {
	return (
		<div name="about" className="w-full">
			<div className="max-w-[1240px] mx-auto grid md:grid-cols-2 gap-6">
				<img
					className="w-[800px] mx-auto my-2"
					src={Img}
					alt="/about image page"
				/>
				<div className="flex flex-col justify-center">
					<h1 className="text-4xl">About</h1>
					<p className="md:text sm:tex-3xl text-2md py-2">
						My name is Sabrina and I am a home based baker and cane decorator
						based in South East London. <br />
						My passion for baking started 2021 when I started baking cakes &
						treats for family and friends. This lead to me experimenting and
						having fun with making different types of cakes and treats such as
						chocolate covered strawberries, cakesicles, sugar cookies &
						chocolate smash hearts. Two years on and I now have my own
						buttercream cakes business specialising in occasion cakes for
						birthdays, anniversaries, christenings, baby and bridal showers,
						charity events & more.
					</p>
				</div>
				<img
					className="w-[800px] mx-auto my-2"
					src={Img}
					alt="/about image page"
				/>
				<div className="flex flex-col justify-center">
					<h1 className="text-4xl">About</h1>
					<p className="md:text sm:tex-3xl text-2md py-2">
						The process of baking and decorating cakes for me is very
						therapeutic, every order I receive is very special to me as it
						allows me to learn and grow whilst trusting the process. I am a
						hardworking, resilient creative who takes pride in my work.
					</p>
					<p>
						I aspire to not only make tasteful, visually pleasing cakes but to
						make others like you have an enjoyable and rememberable experience
						whenever tasting one of my desserts. So if your looking for a cake
						or treats for your special occasion, Boujie Delights can help make
						your day a remarkable. I looking forward to hearing from you soon!
					</p>
					<p>
						So if your looking for a cake or treats for your special occasion,
						Boujie Delights can help make your day a remarkable. I looking
						forward to hearing from you soon!
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
