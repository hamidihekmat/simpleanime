import React, { useState, useEffect } from 'react';
import Card from './Card';
import axios from 'axios';
import './styles.css';

function Cards({ heading }) {
	const [data, setData] = useState([]);
	useEffect(() => {
		async function fetchAnimes() {
			const {
				data: { data },
			} = await axios.get('https://kitsu.io/api/edge/trending/anime');
			setData(data);
		}
		fetchAnimes();
	}, []);
	if (!data) {
		return <p>Loading...</p>;
	}
	return (
		<div className='container mx-auto'>
			<h1 className='text-4xl font-bold m-4'>{heading}</h1>
			<div className='flex flex-wrap justify-between'>
				{data.map((data) => (
					<Card key={data.id} data={data} />
				))}
			</div>
		</div>
	);
}

export default Cards;
