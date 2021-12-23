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
    let collectionName = ownProps.match.params.category_id

    const res = state.shop.collections.filter(el=>el.title.toLowerCase()===collectionName.toLowerCase());
    console.log(res);

    return {
        collections : res[0],
    }
}

export default connect(mapStateToProps)(CollectionPage)
