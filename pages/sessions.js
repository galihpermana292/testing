import React from 'react';
import axios from 'axios';
import SessionCard from '../src/SessionCard';

const Sessions = (props) => {
	console.log(props);
	return (
		<div className="container">
			<div className="row">
				<div className="card-deck">
					{props.sessionData.map((session) => {
						return (
							<div
								className="card col-4 cardmin margintopbottom"
								key={session.id}
							>
								<SessionCard session={session} />
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

Sessions.getInitialProps = async () => {
	var promise = axios
		.get('http://localhost:4000/sessions')
		.then((response) => {
			return {
				hasErrored: false,
				sessionData: response.data,
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

export default Sessions;
