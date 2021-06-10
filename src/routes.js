import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Components/Home/Home';

// ORIONE
import Orione from './Components/Orione/Orione';
import Biografia from './Components/Orione/Biografia/Biografia';
import Obras from './Components/Orione/Obras/Obras';
import ObrasTxt from './Components/Orione/Obras/Fasc1';

import Achiropita from './Components/Achiropita/Achiropita';
import Bixiga from './Components/Bixiga/Bixiga';
import PhotosPage from './Components/PhotosPage/PhotosPage';

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

        {/* ORIONE ROUTES */}
        <Route path={ROUTES.ORIONE} exact component={Orione} />
        <Route path={ROUTES.ORIONE_BIOGRAFIA} exact component={Biografia} />
        <Route path={ROUTES.ORIONE_FILMES} exact component={Orione} />
        <Route path={ROUTES.ORIONE_FOTOS} exact component={Orione} />
        <Route path={ROUTES.ORIONE_ICONOLOGIA} exact component={Orione} />
        <Route path={ROUTES.ORIONE_OBRAS} exact component={Obras} />
        <Route path={ROUTES.ORIONE_OBRAS_TXT} exact component={ObrasTxt} />
        <Route path={ROUTES.ORIONE_PUBLICACOES} exact component={Orione} />

        <Route path={ROUTES.ACHIROPITA} exact component={Achiropita} />
        <Route path={ROUTES.BIXIGA} exact component={Bixiga} />
        <Route path={ROUTES.SEMENTEIRA} exact component={PhotosPage} />

        {/* <Route path={ROUTES.MENU} exact render={(props) => (
          <Menu getOrderData={propsData.getOrderData} user={propsData.userSignIn} deliveryInfo={propsData.deliveryInfo} {...props} />
        )} /> */}
      </Switch>
    </>
  )
}

export default AllRoutes;