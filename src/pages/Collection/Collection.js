import React from 'react';
import CollectionItem from '../../components/CollectionItem/CollectionItem.js';

// redux
import { connect } from 'react-redux';

// reselect
import {createStructuredSelector} from 'reselect';
import {selectCollection} from '../../redux/shop/shop.selectors.js';

import './Collection.scss';

const Collection = ({collection}) => {
	const {title, items} = collection;
	return (
		<div className="collection-page">
			<h2 className="title">{title}</h2>
			<div className="items">
				{
					items.map(item => {
						return(
							<CollectionItem key={item.id} item={item} />
						)
					})
				}
			</div>
		</div>
	)
}

const mapStateToProps = (state, ownProps) => ({
	collection: selectCollection(ownProps.match.params.collectionId)(state)
});

const mapDispatchToProps = {
	
}

export default connect(mapStateToProps)(Collection);