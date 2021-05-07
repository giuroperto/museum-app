import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Components/Home';

import ROUTES from './Components/constants/routes';

const AllRoutes = (props) => {
  // console.log(props);

  // const [ propsData, setPropsData ] = useState({});

  // useEffect(() => {
  //   setPropsData(props);
  // }, [props]);

  // console.log(propsData);

  return (
    <>
      {/* <Navbar /> */}
      <Switch>
        <Route path={ROUTES.HOME} exact component={Home} />

        {/* <Route path={ROUTES.MENU} exact render={(props) => (
          <Menu getOrderData={propsData.getOrderData} user={propsData.userSignIn} deliveryInfo={propsData.deliveryInfo} {...props} />
        )} /> */}
      </Switch>
    </>
  )
}

export default AllRoutes;