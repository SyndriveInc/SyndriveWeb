import React from 'react';
import Contacts from '../Contacts';
import './Card.css'
import MapWithAMarker from '../Map/Map';
import Checkbox from '@material-ui/core/Checkbox'

class Card extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			hidden: true
		}
	}

	//const cardBody = (isChecked) ? 'card-checked' : 'card-unchecked';

	deleteCard = () => {
		console.log("run	")
		this.setState({ hidden: !this.state.hidden });
	}

	render() {
		const { name, dob, bloodGroup, id, contacts, lat, lng, isChecked } = this.props;
		const year = Number(dob.substr(6, 4));
		const month = Number(dob.substr(3, 2)) - 1;
		const day = Number(dob.substr(0, 2));
		let today = new Date();
		let age = today.getFullYear() - year;
		if (today.getMonth() < month || (today.getMonth() === month && today.getDate() < day)) {
			age--;
		}
		
		if(this.state.hidden)
		return (
			<div className='tc bg-lightest-white dib br3 pa3 ma2 bw2 shadow-3 card-unchecked'>
				<img src='../images.png' alt='profile photo'
					className='br-100 h4 w4 dib ba b--black-05 pa2 grow holder'
				/>
				<div>
					<p className='f4'><b>Name: </b>{name}</p>
					<hr class="mw3 bb bw1 b--black-10" />
					<p className='f5 tl'></p>
					<MapWithAMarker
						googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDBgA7QvYJPhmHlWV5mMskI28-3S_T0VVo&v=3.exp&libraries=geometry,drawing,places"
						loadingElement={<div style={{ height: `100%` }} />}
						containerElement={<div style={{ height: `300px`, width: `300px` }} />}
						mapElement={<div style={{ height: `100%` }} />}
						lat={lat}
						lng={lng}
					/>
					<p className='f5 tl'><b>DOB: </b>{day}.{month + 1}.{year} (Age: {age})</p>
					<p className='f5 tl'><b>Blood Group: </b>{bloodGroup}</p>

					<div className=''>
						<p className='f5 tl'><b>Emergency Contacts: </b></p>
						{
							contacts.map((contact, i) => {
								return (
									<Contacts key={i}
										name={contacts[i].name}
										number={contacts[i].number}
									/>
								);
							})
						}
					</div>
					<Checkbox
						label='Issue Addressed'
						onChange={this.deleteCard}
					/>Issue Addressed
			</div>
			</div>
		); 

		else return null;

	}
}

export default Card;