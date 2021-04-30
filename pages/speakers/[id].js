import React from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

const DetailsSpeaker = ({speakerData}) => {
   const router = useRouter();
	const { id } = router.query;
	let data = speakerData.filter(speak => speak.id == id)

	return (
		<>
			{data.map((data) => {
            return (
               <div>
                  <ul>
                     <li>Name : {data.firstName} {data.lastName}</li>
                  </ul>
                  <ul>
                     <li>Company : {data.company}</li>
                  </ul>
                  <ul>
                     <li>Descriptions : {data.bio}</li>
                  </ul>
               </div>
            )
         })}
		</>
	);
};

DetailsSpeaker.getInitialProps = async (gtx) => {
   console.log(gtx)

	var promise = axios
		.get(`http://localhost:4000/speakers/`)
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

export default DetailsSpeaker;
