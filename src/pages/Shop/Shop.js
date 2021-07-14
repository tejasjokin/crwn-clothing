import React from 'react';
import CollectionsOverview from '../../components/CollectionsOverview/CollectionsOverview.js';
import Collection from '../Collection/Collection.js';

// redux
import { connect } from 'react-redux';
import {Route} from 'react-router-dom';

// reselect
import {createStructuredSelector} from 'reselect';

import './Shop.scss';

const Shop = ({match}) => {
	return(
    <div>
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
      <Route exact path={`${match.path}/:collectionId`} component={Collection} />
    </div>
	);
}

const mapStateToProps = createStructuredSelector({
  
});

const mapDispatchToProps = {
  
}

export default connect()(Shop);