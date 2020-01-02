import React from 'react';
import CollectionPreview from '../../components/previewCollection/previewCollection.component';
import {connect } from 'react-redux';
import {selectCollections} from '../../redux/shop/shop.selector';
import { createStructuredSelector } from 'reselect';

const ShopPage = ({ collections }) => (
    <div className="shopPage">
    {
	collections.map(({id, ...otherCollectionProps}) => (
		<CollectionPreview key={id} {...otherCollectionProps}/>
		))
			}
			</div>
)

const mapStateToProps = createStructuredSelector({
  collections : selectCollections
})

export default connect(mapStateToProps)(ShopPage);