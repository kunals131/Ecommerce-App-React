import React from 'react'
import { connect } from 'react-redux'
import CollectionItem from '../../components/collection-item/collection-item.component'

import './Collection.styles.scss'
const CollectionPage = ({match, collections}) => {
    console.log(match);
    console.log(collections);
    const {title, items}=collections;
    return (
        <div className="collection-page">
            <h2 className="title">{title}</h2>
            <div className="items">
                {
                    items.map(item=><CollectionItem key={item.id} item={item}/> )
                }
            </div>
        </div>
    )
}


const mapStateToProps = (state, ownProps)=>{

    return {
        collections : state.shop.collections[ownProps.match.params.category_id]
    }
}

export default connect(mapStateToProps)(CollectionPage)
