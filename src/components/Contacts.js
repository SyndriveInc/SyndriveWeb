import React from 'react';

const Contacts = ({ name, number, key }) => {
	return (
		<div className='container-fluid row'>
			<div className='tl col-md-3'>
				<ul>
					<li><b>Name: </b>{name}</li>
					<li><b>Ph: </b>{number}</li>
				</ul>
			</div>
		</div>
	);
}

export default Contacts;