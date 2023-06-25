// import React, { useState } from 'react';
// import { FaBars, FaTimes } from 'react-icons/fa';
// import Logo from '../assets/Logo.png';

// function Navbar() {
// 	const [nav, setNav] = useState(false);
// 	const handleClick = () => setNav(!nav);

// 	return (
// 		<div className="fixed flex justify-start items-center h-[150px] w-full mx-auto px-4 bg-[#f8f8f8]">
// 			<div className="flex items-center">
// 				<div>
// 					<img src={Logo} alt="Logo" style={{ width: '220px' }} />
// 				</div>
// 				{/* Menu */}
// 				<ul className="hidden ml-8 md:flex">
// 					<li>Home</li>
// 					<li>Bespoke Cakes</li>
// 					<li>Price Guide</li>
// 					<li>About</li>
// 					<li>Contact</li>
// 				</ul>
// 			</div>

// 			{/* Hamburger menu */}
// 			<div onClick={handleClick} className="md:hidden z-10">
// 				{!nav ? <FaBars /> : <FaTimes />}
// 			</div>

// 			{/* Mobile menu */}
// 			<ul
// 				className={
// 					!nav
// 						? 'hidden'
// 						: 'absolute top-0 right-0 w-full h-screen  bg-[#f8f8f8] flex flex-col justify-center items-center'
// 				}
// 			>
// 				<li className="py-6 text04xl">Home</li>
// 				<li className="py-6 text04xl">Bespoke Cakes</li>
// 				<li className="py-6 text04xl">Price Guide</li>
// 				<li className="py-6 text04xl">About</li>
// 				<li className="py-6 text04xl">Contact</li>
// 			</ul>
// 		</div>
// 	);
// }

// export default Navbar;

import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Logo from '../assets/Logo.png';

function Navbar() {
	const [nav, setNav] = useState(false);
	const handleClick = () => setNav(!nav);

	return (
		<div className="fixed uppercase top-0 left-0 right-0 flex justify-start items-center h-[150px] w-full mx-auto px-2 bg-[#f8f8f8]">
			<div className="relative z-20">
				<img src={Logo} alt="Logo" style={{ width: '220px' }} />
			</div>
			{/* Menu */}
			<ul className="hidden px-4 md:flex">
				<li>Home</li>
				<li>Bespoke Cakes</li>
				<li>Price Guide</li>
				<li>About</li>
				<li>Contact</li>
			</ul>

			{/* Hamburger menu */}
			<div onClick={handleClick} className="md:hidden z-30">
				{!nav ? <FaBars /> : <FaTimes />}
			</div>

			{/* Mobile menu */}
			<ul
				className={
					!nav
						? 'hidden'
						: 'absolute top-[150px] right-0 w-full h-screen bg-[#f8f8f8] flex flex-col justify-center items-center'
				}
			>
				<li className="py-6 text04xl">Home</li>
				<li className="py-6 text04xl">Bespoke Cakes</li>
				<li className="py-6 text04xl">Price Guide</li>
				<li className="py-6 text04xl">About</li>
				<li className="py-6 text04xl">Contact</li>
			</ul>
		</div>
	);
}

export default Navbar;
