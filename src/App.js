import React from 'react';
import Cards from './Cards';
import './styles.css';

function App() {
	return (
		<div className='bg-gray-200 font-sans antialiased'>
			{/* <Heading /> */}
			<Cards heading={'Trending Anime'} />
		</div>
	);
}

export default App;
