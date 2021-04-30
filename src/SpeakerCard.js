import Link from 'next/link';
import React from 'react';
import DetailsSpeaker from '../pages/speakers/[id]';
// import pict from '../static/speakers/Speaker-10808.jpg'
const SpeakerCard = ({ speaker }) => {
	return (
		<div>
			<img
				className="card-img-top"
				src={`/static/speakers/Speaker-${speaker.id}.jpg`}
			/>
			<div className="card-body">
				<h4 className="card-title">
					{speaker.userFirstName}{' '}
					{speaker.userLastName}{' '}
				</h4>
				<p className="card-text">{speaker.bioShort}</p>
            <Link href="/speakers/[id]" as={`/speakers/${speaker.id}`}>
               <a>Details</a>
            </Link>
			</div>
		</div>
	);
};

export default SpeakerCard;
