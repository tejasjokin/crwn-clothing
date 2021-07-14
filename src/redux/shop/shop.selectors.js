import { createSelector } from 'reselect';
import memoize from 'lodash.memoize';

export const selectShop = state => state.shop;

export const selectShopData = createSelector(
	[selectShop],
	(shop) => shop.shopItems
);

export const selectShopDataForPreview = createSelector(
	[selectShopData],
	shop => Object.keys(shop).map(key => shop[key])
);

export const selectCollection = memoize(collectionUrlParam => createSelector(
	[selectShopData],
	collections => collections[collectionUrlParam]
));