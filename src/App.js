import './App.css';
import AllRoutes from './routes';
import { HistoryContext } from './Utils/Context';

import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

const App = () => {

  let [ historyData, setHistoryData ] = useState([]);

  // getting value from deeper layers to set as a global state
  const addHistoryData = (historyInfo) => {
    setHistoryData([...historyData, historyInfo ]);
  };

  const goBackThroughHistory = () => {
    let pageToGo = historyData.pop();
    return pageToGo;
  }

  console.log(historyData);

  return (
    <div className="App">
      <HistoryContext.Provider value={historyData}>
        <AllRoutes historyData={historyData} addHistoryData={addHistoryData} />
      </HistoryContext.Provider>
    </div>
  );
}

export default App;
