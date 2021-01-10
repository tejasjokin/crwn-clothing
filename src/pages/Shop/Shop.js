import React, { useState } from 'react';
import CollectionPreview from '../../components/CollectionPreview/CollectionPreview.js';
import SHOP_DATA from './ShopData.js';
import './Shop.scss';

const Shop = () => {

  const [collections] = useState(SHOP_DATA);

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

export default Shop;