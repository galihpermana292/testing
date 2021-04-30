import React from 'react';
// import pict from '../static/speakers/Speaker-10808.jpg'
const SessionCard = ({ session }) => {
	return (
		<div className="card-body">
			<h4 className="card-title"></h4>
			<h6 className="card-title">{session.speakersNamesCsv}</h6>
			<p className="card-text">{session.descriptionShort}</p>
		</div>
	);
};

export default SessionCard;
