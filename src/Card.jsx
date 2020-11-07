import React from 'react';
import './styles.css';

function Cards({ data }) {
	const { attributes } = data;
	const { titles, posterImage, description } = attributes;
	return (
		<div className='bg-white m-4 border shadow-2xl rounded-2xl overflow-hidden lg:max-w-sm md:max-w-xs max-w-sm'>
			<img className='w-full' src={posterImage.large} alt='' />
			<div className='px-4 py-2'>
				<h1 className='font-semibold text-xl my-2'>{titles.en}</h1>
				<p className='leading-tight pb-2'>{description.substr(0, 150)}...</p>
			</div>
		</div>
	);
}

export default Cards;
