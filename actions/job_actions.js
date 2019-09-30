import axios from 'axios';
import reverseGeocode from 'latlng-to-zip';
import qs from 'qs'; 

import {
	FETCH_JOBS 
} from './types';

const JOB_QUERY_PARAMS = {
	publisher: '',
	format: 'json',
	v: 2,
	latlong:1,
	radius:10
}

// export const fetchJobs = () => {
// 	//return an function 
// 	return async (dispatch) => {

// 	}
// }; 

//pass region that is in mapScreen.
export const fetchJobs = (region) => 
	//if we have one return and a single function. then we can remove return and braces a function.
	aysnc (dispatch) => {
		try {
			let zip = await reverseGeocode(region);
		}
		catch(e)
		{
			console.log(e);
		}
	};