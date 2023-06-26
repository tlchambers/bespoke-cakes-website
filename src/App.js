import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Cards from './components/Cards';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Gallery from './components/Gallery';

function App() {
	return (
		<div>
			<Navbar />
			<Hero />
			<About />
			<Cards />
			<Contact />
			<Gallery />
			<Footer />
		</div>
	);
}

export default App;
