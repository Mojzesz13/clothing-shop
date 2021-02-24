import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { sellectCollectionForPreview } from '../../redux/shop/shop.selector';

import CollectionPreview from '../collection-preview/collection-preview';

import './collection-overview.scss';

const CollectionOverview = ({ collections }) => {
  return (
    <div className='collection-overview'>
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

const mapStatetoProps = createStructuredSelector({
  collections: sellectCollectionForPreview  ,
});

export default connect(mapStatetoProps)(CollectionOverview);
