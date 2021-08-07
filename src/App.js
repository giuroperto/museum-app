import './App.css';
import AllRoutes from './routes';

import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

import { HistoryItemsContext } from './Utils/Context';

const App = () => {
  
  const [ history, setHistory ] = useState({
    itemHistory: [],
    route: "",
  });

  const getHistory = (historyArray, route, hasResources, resource, isOriginNavbar) => {
    let obj = {
      itemHistory: historyArray,
      route: route,
      hasResources: hasResources,
      resources: resource,
      isOriginNavbar: isOriginNavbar,
    };
    setHistory(obj);
  };

  console.log(history);

  return (
    <div className="App">
      <HistoryItemsContext.Provider value={ history } >
        <AllRoutes getHistory={getHistory} historyObject={history} />
      </HistoryItemsContext.Provider>
    </div>
  );
}

export default App;
