import React from 'react';
import axios from 'axios';
import SpeakerCard from '../../src/SpeakerCard';

const Speakers = (props) => {
	console.log(props);
	return (
		<div className="container">
			<div className="row">
				<div className="card-deck">
					{props.speakerData.map((speaker) => {
						return (
							<div
								className="card col-4 cardmin margintopbottom20"
								key={speaker.id}
							>
								<SpeakerCard speaker={speaker} />
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

Speakers.getInitialProps = async () => {
	var promise = axios
		.get('http://localhost:4000/speakers')
		.then((response) => {
			return {
				hasErrored: false,
				speakerData: response.data,
			};
		})
		.catch((error) => {
			return {
				hasErrored: true,
				message: error.message,
			};
		});
	return promise;
};

export default Speakers;
