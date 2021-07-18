import React from 'react';
import {HomePageContainer} from './HomePage.styles';
import Directory from '../../components/Directory/Directory.js';

const HomePage = () => {
	return(
		<HomePageContainer>
			<Directory />
		</HomePageContainer>
	);
}

export default HomePage;