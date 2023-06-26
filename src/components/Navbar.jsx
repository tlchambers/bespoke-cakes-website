import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Logo from '../assets/Logo.png';

function Navbar() {
	const [nav, setNav] = useState(false);
	const handleNav = () => {
		setNav(!nav);
	};

	return (
		<div className="w-full flex items-center justify-between bg-[#f8f8f8]">
			{/* Logo and Navigation Menu Container */}
			<div className="flex items-center">
				{/* Logo */}
				<img src={Logo} alt="Logo" style={{ width: '220px' }} />

				{/* Navigation Menu */}
				<ul className="hidden sm:flex ml-8">
					<li>Home</li>
					<li>Bespoke Cakes</li>
					<li>Price Guide</li>
					<li>About</li>
					<li>Contact</li>
				</ul>
			</div>

			{/* Mobile Menu */}
			<div>
				<ul
					className={
						!nav
							? 'hidden'
							: 'absolute top-[120px] right-0 w-full h-screen bg-[#f8f8f8] flex flex-col justify-center items-center'
					}
				>
					<li className="py-8 text04xl ">Home</li>
					<li className="py-8 text04xl">Bespoke Cakes</li>
					<li className="py-8 text04xl">Price Guide</li>
					<li className="py-8 text04xl">About</li>
					<li className="py-8 text04xl">Contact</li>
				</ul>
			</div>

			{/* Hamburger Icon */}
			<div onClick={handleNav} className="sm:hidden pr-4">
				{!nav ? (
					<FaBars size={20} className="mr-4 cursor-pointer" />
				) : (
					<FaTimes size={20} className="mr-4 cursor-pointer" />
				)}
			</div>
		</div>
	);
}

export default Navbar;
