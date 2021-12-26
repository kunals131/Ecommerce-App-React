import React from "react";
import { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import CollectionOverview from "../../components/collections-overview/CollectionOverview.component";
import CollectionPage from "../collection/Collection.component";
import { getListOfCollections } from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import { updateCollections } from "../../redux/shop/shop.action";
import withSpinner from "../../components/with-spinner/with-spinner.component";

const CollectionOverViewWithSpinner = withSpinner(CollectionOverview);
const CollectionPageWithSpinner = withSpinner(CollectionPage);

const ShopPage = ({ updateCollections, match }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      let collections = await getListOfCollections();
      updateCollections(collections);
      setLoading(false);
    };
    getData();
  }, []);

  return (
    <div className="shop-page">
      <Switch>
        <Route
          exact
          path={`${match.path}`}
          render={(props) => (
            <CollectionOverViewWithSpinner isLoading={loading} {...props} />
          )}
        />
        <Route
          exact
          path={`${match.path}/:category_id`}
          render={(props) => (
                <CollectionPageWithSpinner isLoading={loading} {...props} />
              )}
        ></Route>
      </Switch>
    </div>
  );
};

export default connect(null, {
  updateCollections,
})(ShopPage);
