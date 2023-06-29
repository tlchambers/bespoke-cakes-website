import React from 'react';
import { FaInstagram, FaRegCommentDots } from 'react-icons/fa6';
import { GrPhone, GrLocation } from 'react-icons/gr';
import { Link } from 'react-scroll';

function Footer() {
	return (
		<div className="w-full mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 bg-[#f8f8f8]">
			<div>
				<h1 className="text-3xl">Boujie Delights</h1>
				<p className="py-4">
					Step into the world of Boujie Delights, where every cake, cupcake, and
					treat is lovingly handmade in Brockley, South East London. Our bespoke
					creations are not only visually stunning, but also bursting with
					flavor, ensuring that every bite is as unforgettable as the occasion
					itself.
				</p>
			</div>
			<div className="lg:col-span-2 flex justify-between">
				<div>
					<h6 className="font-medium text-center">Useful Links</h6>
					<ul>
						<li className="py-2 text-sm">
							<Link to="cakes" smooth={true} offset={-200} duration={500}>
								Bespoke Cakes
							</Link>
						</li>
						<li className="py-2 text-sm">
							<Link to="howToOrder" smooth={true} offset={-50} duration={500}>
								How To Order
							</Link>
						</li>
						<li className="py-2 text-sm">
							<Link to="about" smooth={true} offset={-50} duration={500}>
								About
							</Link>
						</li>
						<li className="py-2 text-sm">
							<Link to="contact" smooth={true} offset={-50} duration={500}>
								Contact
							</Link>
						</li>
					</ul>
				</div>
				<div>
					<h6 className="font-medium text-center">Legal</h6>
					<ul>
						<li className="py-2 text-sm">Policy</li>
					</ul>
				</div>
				<div>
					<ul>
						<h6 className="font-medium text-center">Contact</h6>
						<li className="py-2 text-sm">
							<p className="flex align-items-start">
								<GrLocation size={20} style={{ marginRight: '0.8rem' }} />
								South-East London,
								<br /> Forest Hill
							</p>
						</li>
						<li className="py-2 text-sm">
							<p className="flex items-center align-items-start">
								<GrPhone size={20} style={{ marginRight: '0.8rem' }} />
								07810237414
							</p>
						</li>
						<li className="py-2 text-sm">
							<p className="flex items-center align-items-start">
								<FaRegCommentDots size={20} style={{ marginRight: '0.8rem' }} />
								boujiedelights@outlook.com
							</p>
						</li>
						<li className="py-2 text-sm">
							<p className="flex items-center align-items-start">
								<FaInstagram size={20} style={{ marginRight: '0.8rem' }} />
								@boujiedelights
							</p>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Footer;
