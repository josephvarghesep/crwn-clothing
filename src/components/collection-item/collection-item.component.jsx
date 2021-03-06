import React from 'react';
import {connect} from 'react-redux';

import './collection-item.styles.scss';
import CustomButton from '../custom-button/custom-button.component';
import {addItem} from '../../redux/cart/cart.actons';

const CollectionItem = ({item, addItemm}) => {
    const {imageUrl, name, price} = item;
    return (
    <div className='collection-item'>
        <div className='image'
            style={{
                backgroundImage: `url(${imageUrl})`
            }}>
        </div>
        <div className='collection-footer'>
            <span className='name'>{name}</span>
            <span className='price'>{price}</span>
        </div>
        <CustomButton onClick={() => addItemm(item)} inverted>Add To Cart</CustomButton>
    </div>
    )
};

const mapDispatchToProps = dispatch => ({
    addItemm: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);
