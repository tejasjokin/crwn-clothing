import React from 'react';

// redux
import { connect } from 'react-redux';

// reselect
import {createStructuredSelector} from 'reselect';
import {selectSections} from '../../redux/directory/directory.selectors.js'

import MenuItem from '../MenuItem/MenuItem.js';
import './Directory.scss';

const Directory = ({sections}) => {
	return(
		<div className="directory-menu">
			{
				sections.map(({title, imageUrl, size, linkUrl}, index) => {
					return(
						<MenuItem key={index} title={title.toUpperCase()} imageUrl={imageUrl} size={size} linkUrl={linkUrl}/>	
					);
				})
			}
		</div>
	);
}

const mapStateToProps = createStructuredSelector({
  sections: selectSections
});

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps)(Directory);