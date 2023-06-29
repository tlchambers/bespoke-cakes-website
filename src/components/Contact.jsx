import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import Img1 from '../assets/aboutImage.jpeg';

function Contact() {
	const [capVal, setCapVal] = useState('');

	function Submit(e) {
		e.preventDefault();
		const formElement = document.querySelector('#form');
		const formData = new FormData(formElement);

		fetch(
			'https://script.google.com/macros/s/AKfycbx5aP0SuqyQOrNGn2cI3w3lagEYLgHAX7vp1ucQWt9UrVSD9c7haoYZCiBAbyABVnNq/exec',
			{
				method: 'POST',
				body: formData,
			}
		)
			.then((response) => {
				// handle response from the Google Sheets API
				if (response.ok) {
					console.log('Form submitted!');
					// Clear information from from
					formElement.reset();
				} else {
					console.log('Form failed to submit');
				}
			})
			.catch((error) => {
				console.log('Error:', error);
			});

		const submissionMessage = document.createElement('p');
		submissionMessage.textContent =
			'Your message has been successfully submitted!';
		formElement.appendChild(submissionMessage);

		setTimeout(() => {
			submissionMessage.remove();
		}, 6000);
	}

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
				<form
					id="form"
					className="flex flex-col justify-center items-center"
					onSubmit={(e) => Submit(e)}
				>
					<div className="grid grid-cols-2 w-full max-w-xl">
						<input
							className="border m-2 p-2"
							type="text"
							name="First"
							placeholder="First"
						/>
						<input
							className="border m-2 p-2"
							type="text"
							name="Last"
							placeholder="Last"
						/>
						<input
							className="border col-span-2 m-2 p-2"
							type="email"
							name="Email"
							placeholder="someone@gmail.com"
						/>
						<textarea
							className="border col-span-2 m-2 p-2"
							cols={30}
							rows={10}
							placeholder="Message"
							name="Message"
						></textarea>
						<ReCAPTCHA
							className="m-2 p-2"
							secretKey="6LfSm9kmAAAAAIRh03IqSLBMGEPaa6A_biXg-z8J"
							onChange={(givenCapValue) => setCapVal(givenCapValue)}
						/>
						<button
							disabled={!capVal}
							className="uppercase col-span-2 m-2 bg-[#fee3c3] text-black hover:bg-white hover:border-2 hover:border-[#fee3c3]"
						>
							Submit
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}

export default Contact;
