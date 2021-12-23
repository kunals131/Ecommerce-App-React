import React from 'react'
import { connect } from 'react-redux'
import CollectionPreview from '../preview-collection/preview-collection.component'
import './CollectionOverview.styles.scss';
const CollectionOverview = ({collections}) => {
    return (
        <div className='collections-overview'>
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
    )
}
const mapStateToProps = (state)=>{
    return {
        collections : state.shop.collections
    }
}


export default connect(mapStateToProps)(CollectionOverview)
