import React from 'react';
import Work1 from '../assets/Logo.png';
import Work2 from '../assets/Logo.png';
import Work3 from '../assets/Logo.png';

function Cake({ imageUrl, typeOfCake }) {
	return (
		<div>
			<img
				src={imageUrl}
				alt={typeOfCake}
				className="object-cover w-full h-full"
			/>
		</div>
	);
}

export default Cake;

<div
	style={{ backgroundImage: `url(${Work1})` }}
	className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center content-div"
>
	{/* Hover Effects */}
	<div className="opacity-0 group-hover:opacity-100">
		<span className="text-2xl font-bold text-white tracking-wider">
			React JS Application
		</span>
		<div className="pt-8 text-center">
			<a href="/">
				<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
					Demo
				</button>
			</a>
			<a href="/">
				<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
					Code
				</button>
			</a>
		</div>
	</div>
</div>;

{
	/* Grid Item2 */
}
<div
	style={{ backgroundImage: `url(${Work2})` }}
	className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center content-div"
>
	{/* Hover Effects */}
	<div className="opacity-0 group-hover:opacity-100">
		<span className="text-2xl font-bold text-white tracking-wider">
			React JS Application
		</span>
		<div className="pt-8 text-center">
			<a href="/">
				<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
					Demo
				</button>
			</a>
			<a href="/">
				<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
					Code
				</button>
			</a>
		</div>
	</div>
</div>;

{
	/* Grid Item3 */
}
<div
	style={{ backgroundImage: `url(${Work1})` }}
	className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center content-div"
>
	{/* Hover Effects */}
	<div className="opacity-0 group-hover:opacity-100">
		<span className="text-2xl font-bold text-white tracking-wider">
			React JS Application
		</span>
		<div className="pt-8 text-center">
			<a href="/">
				<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
					Demo
				</button>
			</a>
			<a href="/">
				<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
					Code
				</button>
			</a>
		</div>
	</div>
</div>;
