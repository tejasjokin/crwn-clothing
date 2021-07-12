import React from 'react';

// redux
import { connect } from 'react-redux';

// reselect
import {createStructuredSelector} from 'reselect';
import {selectShopData} from '../../redux/shop/shop.selectors.js';

import CollectionPreview from '../../components/CollectionPreview/CollectionPreview.js';
import './Shop.scss';

const Shop = ({collections}) => {
	return(
    <div>
      {
        collections.map(({id, ...otherCollectionProps}) => {
          return(
            <CollectionPreview key={id} {...otherCollectionProps} />
          );
        })
      }
    </div>
	);
}

const mapStateToProps = createStructuredSelector({
  collections: selectShopData
});

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps)(Shop);