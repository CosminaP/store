import React from 'react';
import CollectionsOverview from '../../components/collections-overview/collections-overview.compoent'
import CollectionPage from '../collection-page/collection-page.component';
import { Route } from 'react-router-dom';

const ShopPage = ({match}) =>{
    return (
      <div className='shop-page'>
        <Route exact path={`${match.path}`} component={CollectionsOverview}></Route>
        <Route path={`${match.path}/:categoryId`} component={CollectionPage}/>
      </div>
    );
}

export default ShopPage;
