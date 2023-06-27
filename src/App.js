import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import HowToOrder from './components/HowToOrder';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Gallery from './components/Gallery';
import Cakes from './components/Cakes';

function App() {
	return (
		<div>
			<Navbar />
			<Hero />
			<Cakes />
			<About />
			<HowToOrder />
			<Gallery />
			<Contact />
			<Footer />
		</div>
	);
}

export default App;
