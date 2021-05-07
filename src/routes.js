import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Components/Home/Home';
import Achiropita from './Components/Achiropita/Achiropita';
import Orione from './Components/Orione/Orione';
import Bixiga from './Components/Bixiga/Bixiga';

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
        <Route path={ROUTES.ACHIROPITA} exact component={Achiropita} />
        <Route path={ROUTES.ORIONE} exact component={Orione} />
        <Route path={ROUTES.BIXIGA} exact component={Bixiga} />

        {/* <Route path={ROUTES.MENU} exact render={(props) => (
          <Menu getOrderData={propsData.getOrderData} user={propsData.userSignIn} deliveryInfo={propsData.deliveryInfo} {...props} />
        )} /> */}
      </Switch>
    </>
  )
}

export default AllRoutes;