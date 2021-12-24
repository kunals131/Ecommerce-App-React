import React from 'react'
import { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import CollectionOverview from '../../components/collections-overview/CollectionOverview.component'
import CollectionPage from '../collection/Collection.component';
import { getListOfCollections } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import { updateCollections } from '../../redux/shop/shop.action';

const ShopPage = ({updateCollections, match})=> {

        

        useEffect(()=>{
               const getData = async ()=>{
                       let collections = await getListOfCollections();
                       updateCollections(collections);

               }
               getData();
        }, [])



        return (
        <div className='shop-page'>
        <Switch>
        <Route exact path={`${match.path}`} component={CollectionOverview}/>
        <Route  exact path={`${match.path}/:category_id`} component={CollectionPage}></Route>
        </Switch>
        </div>
        );

}

export default connect(null, {
        updateCollections
})(ShopPage)