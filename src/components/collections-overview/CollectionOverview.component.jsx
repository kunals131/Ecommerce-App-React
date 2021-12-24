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
    let collections  =  state.shop.collections?Object.values(state.shop.collections):[]
    return {
        collections
    }
}


export default connect(mapStateToProps)(CollectionOverview)
