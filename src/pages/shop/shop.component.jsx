import React from "react";
import { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";


import { connect } from "react-redux";
import { fetchCollectionsFromDatabase} from "../../redux/shop/shop.action";
import withSpinner from "../../components/with-spinner/with-spinner.component";
import { lazy, Suspense } from "react";
import Spinner from "../../components/spinner/spinner.component";


const CollectionOverview = lazy(()=>import('../../components/collections-overview/CollectionOverview.component'));
const CollectionPage = lazy(()=>import('../collection/Collection.component'));

const CollectionOverViewWithSpinner = withSpinner(CollectionOverview);
const CollectionPageWithSpinner = withSpinner(CollectionPage);




const ShopPage = ({ fetchCollectionsFromDatabase, match, loading, collections }) => {
  useEffect(() => {
          fetchCollectionsFromDatabase()
  }, []);

  return (
    <div className="shop-page">
      <Switch>
        <Suspense fallback={<Spinner/>}>
        <Route
          exact
          path={`${match.path}`}
          render={(props) => (
            <CollectionOverViewWithSpinner isLoading={loading || !(!!collections)} {...props} />
          )}
        />
        <Route
          exact
          path={`${match.path}/:category_id`}
          render={(props) => (
                <CollectionPageWithSpinner isLoading={loading || !(!!collections)} {...props} />
              )}
        ></Route>
        </Suspense>
      </Switch>
    </div>
  );
};



export default connect((state)=>({
        loading : state.loading,
        collections : state.shop.collections
}), {
  fetchCollectionsFromDatabase
})(ShopPage);
