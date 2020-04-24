import React from 'react';
import SHOP_DATA from './shop.data.js';
import CollectionPreview from '../../components/collection-preview/collection-preview.component.jsx';

class ShopPage extends React.Component {
    constructor(props){
        super();
        this.state = {
            collections : SHOP_DATA
        };
    }

    render () {
        const collections = this.state.collections;
        return (
        <div className='shop-page'>
        {
            collections.map(({id, ...otherCollectionProps}) => (
                <CollectionPreview key={id} {...otherCollectionProps}></CollectionPreview>
            ))
            
        }
        </div>
        )
    }
}

export default ShopPage;