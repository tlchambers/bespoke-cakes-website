import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Navbar = () => {
	const [nav, setNav] = useState(false);
	const handleClick = () => setNav(!nav);

	const handleClose = () => setNav(!nav);

	return (
		<div className="w-screen h-[80px] z-20 bg-zinc-200 fixed drop-shadow-lg">
			<div className="px-2 flex justify-between items-center w-full h-full">
				<div className="flex items-center">
					<h1 className="text-2xl mr-4 sm:text-4xl">Boujie Delights</h1>
					<ul className="hidden md:flex">
						<li>
							<Link
								to="home"
								smooth={true}
								duration={500}
								className="cursor-pointer"
							>
								Home
							</Link>
						</li>
						<li>
							<Link
								to="cakes"
								smooth={true}
								offset={-200}
								duration={500}
								className="cursor-pointer"
							>
								Bespoke Cakes
							</Link>
						</li>
						<li>
							<Link
								to="howToOrder"
								smooth={true}
								offset={-50}
								duration={500}
								className="cursor-pointer"
							>
								How To Order
							</Link>
						</li>
						<li>
							<Link
								to="about"
								smooth={true}
								offset={-50}
								duration={500}
								className="cursor-pointer"
							>
								About
							</Link>
						</li>
						<li>
							<Link
								to="contact"
								smooth={true}
								offset={-50}
								duration={500}
								className="cursor-pointer"
							>
								Contact
							</Link>
						</li>
					</ul>
				</div>

				<div className="md:hidden mr-4" onClick={handleClick}>
					{!nav ? <FaBars /> : <FaTimes />}
				</div>
			</div>

			<ul className={!nav ? 'hidden' : 'absolute bg-zinc-200 w-full px-8 py-8'}>
				<li className="border-b-2 border-zinc-300 w-full">
					<Link onClick={handleClose} to="home" smooth={true} duration={500}>
						Home
					</Link>
				</li>
				<li className="border-b-2 border-zinc-300 w-full">
					<Link
						onClick={handleClose}
						to="cakes"
						smooth={true}
						offset={-200}
						duration={500}
					>
						Bespoke Cakes
					</Link>
				</li>
				<li className="border-b-2 border-zinc-300 w-full">
					<Link
						onClick={handleClose}
						to="howToOrder"
						smooth={true}
						offset={-50}
						duration={500}
					>
						How To Order
					</Link>
				</li>
				<li className="border-b-2 border-zinc-300 w-full">
					<Link
						onClick={handleClose}
						to="about"
						smooth={true}
						offset={-50}
						duration={500}
					>
						About
					</Link>
				</li>
				<li className="border-b-2 border-zinc-300 w-full">
					<Link
						onClick={handleClose}
						to="contact"
						smooth={true}
						offset={-50}
						duration={500}
					>
						Contact
					</Link>
				</li>
			</ul>
		</div>
	);
};

export default Navbar;
