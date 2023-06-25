import React from 'react';
import { FaInstagram, FaRegCommentDots } from 'react-icons/fa6';
import { GrPhone, GrLocation } from 'react-icons/gr';

function Footer() {
	return (
		<div className="w-full mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 bg-[#f8f8f8]">
			<div>
				<h1 className="w-full text-3xl font-bold">Boujie Delights</h1>
				<p className="py-4">
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id odit
					ullam iste repellat consequatur libero reiciendis, blanditiis
					accusantium.
				</p>
			</div>
			<div className="lg:col-span-2 flex justify-between">
				<div>
					<h6 className="font-medium text-center">Useful Links</h6>
					<ul>
						<li className="py-2 text-sm">Bespoke Cakes</li>
						<li className="py-2 text-sm">Price Guide</li>
						<li className="py-2 text-sm">About</li>
						<li className="py-2 text-sm">Contact</li>
					</ul>
				</div>
				<div>
					<h6 className="font-medium text-center">Legal</h6>
					<ul>
						<li className="py-2 text-sm">Policy</li>
					</ul>
				</div>
				<div>
					<h6 className="font-medium text-center">Company</h6>
					<ul>
						<li className="py-2 text-sm">
							<p>
								<GrLocation size={20} /> South-East London,
								<br /> Forest Hill
							</p>
						</li>
						<li className="py-2 text-sm">
							<p>
								<GrPhone size={20} /> 07XXXXXXXX
							</p>
						</li>
						<li className="py-2 text-sm">
							<p>
								<FaRegCommentDots size={20} /> boujiedelights@gmail.com
							</p>
						</li>
						<li className="py-2 text-sm">
							<p>
								<FaInstagram size={20} /> @boujiedelights
							</p>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Footer;
