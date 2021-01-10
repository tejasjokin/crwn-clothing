import React from 'react';
import './CollectionPreview.scss';

const CollectionPreview = ({title, items}) => {
	return(
		<div className="collection-preview">
			<h1 className="title">{title.toUpperCase()}</h1>
			<div className="preview">
				{
					items
						.filter((item,ind) => ind<4)
						.map(({name, id}) => {
						return(
							<div key={id}>
								{name}
							</div>
						);
					})
				}
			</div>
		</div>
	);
}

export default CollectionPreview;