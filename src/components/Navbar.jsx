import React from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Logo from '../assets/Logo.png';

function Navbar() {
	return (
		<div className="fixed w-full h-[180px] flex justify-start items-center px-4 bg-[#f8f8f8]">
			<div>
				<img src={Logo} alt="Logo Iamge" style={{ width: '220px' }} />
			</div>
			{/* Menu */}
			<div>
				<ul className="flex">
					<li className="p-4">Home</li>
					<li className="p-4">Bespoke Cakes</li>
					<li className="p-4">Price Guide</li>
					<li className="p-4">About</li>
					<li className="p-4">Contact</li>
				</ul>
			</div>
			{/* Hamburger menu */}
			<div className="hidden">
				<FaBars />
			</div>
			{/* Social */}
			<div className="hidden">
				<ul>
					<li className="p-4">Home</li>
					<li className="p-4">Bespoke Cakes</li>
					<li className="p-4">Price Guide</li>
					<li className="p-4">About</li>
					<li className="p-4">Contact</li>
				</ul>
			</div>
		</div>
	);
}

export default Navbar;
