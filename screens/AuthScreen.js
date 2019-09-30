import React, { Component } from 'react';
import { Text, View , AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../actions';

class AuthScreen extends Component {
//we are't getting anything from authscreen instead we are get all stuff from parent so. facebookLogin()
	componentDidMount() {
		this.props.facebookLogin();
		this.onAuthComplete(this.props);
	}

	componentWillReceiveProps(nextProps)
	{
		this.onAuthComplete(nextProps);
	}

	onAuthComplete(props)
	{
		if(props.token){
			this.props.navigation.navigate('map');
		}
	}

	render()
	{	
		return(
			<View /	> 
			);
	}
}

//when data changes use mapStateToProps, that return token: auth.token;
function mapStateToProps({ auth })
{
	return { token: auth.token };
}

export default connect(null, actions)(AuthScreen);