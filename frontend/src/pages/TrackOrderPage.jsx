import React from 'react';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import TrackOrder from '../components/Order/TrackOrder.jsx';

const TrackOrderPage = () => {
	return (
		<div>
			<Header></Header>
			<TrackOrder />
			<Footer></Footer>
		</div>
	);
};

export default TrackOrderPage;
