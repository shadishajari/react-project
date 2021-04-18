import React, { Component } from 'react';
import Map from './Map';

class Home extends Component {

	constructor( props ){
		super( props );
		this.state = {
				lat:45.40797,
				lng:11.88586
		}
	}
	
	render() {
		this.componentDidMount();
		return(
			<div style={{ margin: '100px' }}>
				<Map
					google={this.props.google}
					center={{lat:this.state.lat,lng:this.state.lng}}
					height='300px'
					zoom={15}
				/>
			</div>
		);
	}

	componentDidMount() {
			if(this.state.lng==null){
				navigator.geolocation.getCurrentPosition((position) => {
					this.setState( 
					{lat: position.coords.latitude, lng: position.coords.longitude}

				
					 )
				})
			}

	  }
	  

}

export default Home;
