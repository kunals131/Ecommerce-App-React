import React from 'react'

import CollectionPreview from '../../components/preview-collection/preview-collection.component';

import { connect } from 'react-redux';

const ShopPage = ({collections})=> {

        return <div className='shop-page'>
            {
                collections.map(collection=>{
                    return(
                        <CollectionPreview key = {collection.id}
                        items = {collection.items}
                        title = {collection.title}
                        ></CollectionPreview>
                    )
                })
            }

        </div>

}

const mapStateToProps = (state)=>{
    return {
        collections : state.shop.collections
    }
}

export default connect(mapStateToProps)(ShopPage)