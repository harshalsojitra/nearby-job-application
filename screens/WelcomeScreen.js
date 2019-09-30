import _ from 'lodash';
import React, { Component }from 'react';
import { Text, View, AsyncStorage } from 'react-native';
import { AppLoading } from 'expo';
import Slides from '../components/Slides';

const SLIDE_DATA = [
	{text: 'Welcome to JobApp', color: '#03A9F4'}, 
	{text: 'use this to get a descent job', color:'#009688'},
	{text: 'set your location , then swipe away', color:'#03A9F4'}
];

class WelcomeScreen extends Component {
	state= { token: null }

	async componentWillMount(){
		let token = await AsyncStorage.getItem('fb_token');
		//check if token exist or not?
		if(token)
		{
			this.props.navigation.navigate('map');
		}
		else {
			this.setState({ token: false }); 
		}
	}

	onSlidesComplete = () => {
		this.props.navigation.navigate('auth');
	} 

	render()
	{
		if(_.isNull(this.state.token)){
			return <AppLoading/>
		}

		return(
			<Slides data={SLIDE_DATA} onComplete={this.onSlidesComplete} />
			);
	}
}

export default WelcomeScreen;