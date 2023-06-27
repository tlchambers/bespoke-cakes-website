import React from 'react';
import Img1 from '../assets/aboutImage.jpeg';

function Contact() {
	return (
		<div
			name="contact"
			className="max-w-[1240px] m-auto w-full px-4 py-[4rem] flex flex-col items-center"
		>
			<h2 className="text-3xl py-6 uppercase text-center">Contact Us</h2>
			<p className="text-center py-2">
				If you are looking for a cake or treats for your special occasion,
				Boujie Delights can help make your day remarkable.
			</p>
			<div className="grid md:grid-cols-2 py-4">
				<img src={Img1} alt="/" className="w-full md:h-full object-cover" />
				<form className="flex flex-col justify-center items-center">
					<div className="grid grid-cols-2 w-full max-w-xl">
						<input className="border m-2 p-2" type="text" placeholder="First" />
						<input className="border m-2 p-2" type="text" placeholder="Last" />
						<input
							className="border col-span-2 m-2 p-2"
							type="email"
							placeholder="someone@gmail.com"
						/>
						<textarea
							className="border col-span-2 m-2 p-2"
							cols={30}
							rows={10}
							placeholder="Message"
						></textarea>
						<button className="uppercase col-span-2 m-2 bg-[#fee3c3] text-black hover:bg-white hover:border-2 hover:border-[#fee3c3]">
							Submit
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}

export default Contact;
