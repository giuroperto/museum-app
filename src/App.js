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
  const [ historyItems, setHistoryItems ] = useState([]);
  const [ historyRoute, setHistoryRoute ] = useState("");

  const getHistory = (historyArray, route) => {
    let obj = {
      itemHistory: historyArray,
      route: route,
    };
    setHistory(obj);
  };

  // console.log(historyItems);
  console.log(history);

  return (
    <div className="App">
      <HistoryItemsContext.Provider value={ history } >
        <AllRoutes getHistory={getHistory} history={history} />
      </HistoryItemsContext.Provider>
    </div>
  );
}

export default App;
