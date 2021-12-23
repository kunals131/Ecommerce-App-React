import React from 'react'
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import { connect } from 'react-redux';
import CollectionOverview from '../../components/collections-overview/CollectionOverview.component'
import CollectionPage from '../collection/Collection.component';

function ReturnDiv({match}) {
        console.log(match.params.category_id)
        return <div>Hello</div>
}

const ShopPage = ({match})=> {
console.log(match);
        return <div className='shop-page'>
        <Switch>
        <Route exact path={`${match.path}`} component={CollectionOverview}/>
        <Route  exact path={`${match.path}/:category_id`} component={CollectionPage}></Route>
        </Switch>
        </div>

}

export default ShopPage