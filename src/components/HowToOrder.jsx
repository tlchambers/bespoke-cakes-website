import React from 'react';
import Img1 from '../assets/ContactBkgroundImage.jpeg';
import Img2 from '../assets/Logo.png';
import Img3 from '../assets/aboutImage.jpeg';
import { GiCakeSlice, GiCupcake } from 'react-icons/gi';
// import { FaCakeCandles } from 'react-icons/fa';
import { BiPound } from 'react-icons/bi';
import { FaArrowRightLong } from 'react-icons/fa6';
import { Link } from 'react-scroll';

const HowToOrder = () => {
	return (
		<div name="howToOrder" className="w-full h-screen">
			<div className="w-full h-[700px] bg-gray-900/20 absolute">
				<img
					className="w-full h-full object-cover mix-blend-overlay"
					src={Img1}
					alt="/"
				/>
			</div>

			<div className="max-w-[1240px] mx-auto relative">
				<div className="px-4 pt-8">
					<h2 className="text-3xl pt-6 uppercase">How to Order</h2>
					<h4 className="text-2xl pt-4">
						Create your bespoke flavour and combination
					</h4>
					<p className="max-w-[450px] ">
						Boujie Delights uses the finest ingredients to create cakes that are
						both beautiful and delicious. From classic flavors like vanilla and
						chocolate, to more indulging options like lotus biscoff and caramel.
					</p>

					<div className="justify-start pt-6">
						<button className="w-[200px]">
							<Link
								to="contact"
								smooth={true}
								offset={-50}
								duration={500}
								className="group flex justify-center items-center cursor-pointer"
							>
								Enquire Today
								<span className="group-hover:rotate-90 duration-300">
									<FaArrowRightLong className="ml-3" />
								</span>
							</Link>
						</button>
					</div>

					<div className="grid grid-cols-1 lg:grid-cols-3 relative gap-8 px-4 sm:pt-20 text-black">
						<div className="bg-white rounded-xl shadow-2xl">
							<div className="p-8">
								<h3 className="flex justify-center items-center text-2xl py-4">
									<GiCakeSlice size={40} style={{ marginRight: '0.8rem' }} />
									Flavours
								</h3>
								<ul className="justify-center items-center text-gray-600">
									<li className="py-2 border-b mx-4 mt-2">
										Vanilla Sponge & Buttercream
									</li>

									<li className="py-2 border-b mx-4">
										Oreo Sponge & Buttercream
									</li>

									<li className="py-2 border-b mx-4">
										Caramel Sponge & Biscoff Buttercream
									</li>

									<li className="py-2 border-b mx-4">
										Red Velvet Sponge & Vanilla Buttercream
									</li>

									<li className="py-2 border-b mx-4 pb-3">
										Chocolate Sponge & Buttercream
									</li>
								</ul>
							</div>
						</div>

						<div className="bg-white rounded-xl shadow-2xl">
							<div className="p-8">
								<h3 className="flex justify-center items-center text-2xl py-4">
									<GiCupcake size={40} style={{ marginRight: '0.8rem' }} />
									Fillings
								</h3>

								<ul className="justify-center items-center text-center text-gray-600">
									<li className="py-2 border-b mx-4 mt-2">Strawberry Jam</li>
									<li className="py-2 border-b mx-4">Raspberry Jam</li>
									<li className="py-2 border-b mx-4">
										Hershey's Cookies & Creme
									</li>
									<li className="py-2 border-b mx-4">Caramel</li>
									<li className="py-2 border-b mx-4 pb-3">Lotus Biscoff</li>
								</ul>
							</div>
						</div>

						<div className="bg-white rounded-xl shadow-2xl">
							<div className="p-8">
								<h3 className="flex justify-center items-center text-2xl py-4">
									<BiPound size={40} style={{ marginRight: '0.8rem' }} />
									Prices
								</h3>

								<ul className="justify-center items-center text-gray-600">
									<li className="py-2 border-b mx-4 mt-2">
										<span className=" text-gray-900">CUPCAKES</span>
										<p>Box of 9 starting from £24</p>
										<p>Box of 12 starting from £30</p>
										<p>Box of 24 starting from £60</p>
									</li>

									<li className="py-2 border-b mx-4 mt-2">
										<span className=" text-gray-900">OCASSION CAKES</span>
										<p>4" starting from £75</p>
										<p>6" starting from £130</p>
										<p>8" starting from £180</p>
									</li>

									<li className="py-2 border-b mx-4 mt-2">
										<span className=" text-gray-900">MINI CAKES</span>
										<p>2 Layer circle or heart cakes from £65</p>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HowToOrder;