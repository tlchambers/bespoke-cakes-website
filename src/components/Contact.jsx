import React from 'react';
import Img1 from '../assets/aboutImage.jpeg';

function Contact() {
	return (
		<div name="contact" className="max-w-[1140px] m-auto w-full px-4 py-16">
			<h2 className="text-4xl text-center uppercase">Contact Us</h2>
			<p className="text-center py-2">Or say Hello!</p>
			<div className="grid md:grid-cols-2">
				<img
					src={Img1}
					alt="/"
					className="w-full md:h-full object-cover p-2 max-h-[600px] h-[200]px"
				/>
				<form>
					<div className="grid grid-cols-2">
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
						<button className="col-span-2 m-2 bg-pink-600">Submit</button>
					</div>
				</form>
			</div>
		</div>
	);
}

export default Contact;
