import React from 'react'; 
import Card from '../Card/Card';
import { connect } from 'react-redux';
// import { startSetExpense } from '../../actions/victims';
import './CardList.css';

const CardList = ({ victims }) => {
	return (
		<div className='card-list'>
			{
				victims && victims.map((victim, i) => {
					return (
						<Card key={i}
							id={victims[i].id}
							name={victims[i].name}
							dob={victims[i].dob}
							bloodGroup={victims[i].bloodGroup}
							lat={victims[i].location.lat}
							lng={victims[i].location.lng}
							// photo={'http://i0.wp.com/www.coldashpreschool.org.uk/wp-content/uploads/2017/01/Blank-Profile-Pic.jpg'}
							contacts={victims[i].contacts}
						//isChecked={false}
						/>
					);
				})
			}
			{
				!victims && <h1>You have no patients yet!</h1>
			}
		</div>
	);
}

const mapStateToProps = (state) => ({
	victims: state.victims,
});

export default connect(mapStateToProps)(CardList);