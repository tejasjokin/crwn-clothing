import React from 'react';
import CollectionPreview from '../CollectionPreview/CollectionPreview.js';

// redux
import { connect } from 'react-redux';

// reselect
import {createStructuredSelector} from 'reselect';
import {selectShopDataForPreview} from '../../redux/shop/shop.selectors.js';

import './CollectionsOverview.scss';

const CollectionsOverview = ({collections}) => {
	return (
		<div className="collection-overview">
			{
				collections.map(({id, ...otherCollectionProps}) => {
		          return(
		            <CollectionPreview key={id} {...otherCollectionProps} />
		          );
		        })
			}
		</div>
	)
}

const mapStateToProps = createStructuredSelector({
	collections: selectShopDataForPreview
})

const mapDispatchToProps = {
	
}

export default connect(mapStateToProps)(CollectionsOverview);