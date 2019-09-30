import { AsyncStorage } from 'react-native';
import { Facebook } from 'expo';
 
import {
	FACEBOOK_LOGIN_SUCCESS,
	FACEBOOK_LOGIN_FAIL 
} from './types';

//async storage works as local storage of a device.
//how we gonna use that in this.
//AsyncStorage.setItem('fb_token', token);
//AsyncStorage.getItem('fb_token');

export const facebookLogin = () => //we remove {braces} here because here one fun. and and also remove return from await. 
	//return fun.(dis.) is an redux thunk is automatically call this function and pass dispatch fun. it dispatch action at any future point of time. 
	async (dispatch) => {
	//go and get fb token from device as token.
	let token = await AsyncStorage.getItem('fb_token');

		if(token)
		{
			//Dispatch an action fb login is done.
			dispatch({ type: FACEBOOK_LOGIN_SUCCESS, payload: token });
		}	
		else {
			//Start up FB login process.
			doFacebookLogin(dispatch);
		}
	};

	const doFacebookLogin = async (dispatch) => {
		//we want only type and token. type-> specifys that authentication is successful.
	let { type, token } = await Facebook.logInWithReadPermissionsAsync(/*it is string not a number*/'845272662526289', {
			permissions: ['public_profile']
		});

		if(type === 'cancel')
		{
			return dispatch({type: FACEBOOK_LOGIN_FAIL});
		}

		await AsyncStorage.setItem('fb_token', token);
		dispatch({type: FACEBOOK_LOGIN_SUCCESS, payload: token });
	};