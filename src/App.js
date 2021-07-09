import './App.css';
import AllRoutes from './routes';

import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

import { HistoryContext, HistoryItemsContext } from './Utils/Context';

const App = () => {

  const [ history, setHistory ] = useState({});
  const [ historyItems, setHistoryItems ] = useState([]);

  const getHistory = (newHistory, newLastPage, newPageCategory) => {

    let newHistoryEntry = {
      currentPageCategory: newPageCategory,
      historyArray: newHistory,
      lastPage: newLastPage,
    };

    setHistory({...history, ...newHistoryEntry});
  };

  const updateHistory = (historyObj) => {
    let newArr = historyItems.push(historyObj);
    setHistoryItems(newArr);
  };

  console.log(historyItems);

  return (
    <div className="App">
      <HistoryContext.Provider value={ history } >
        <HistoryItemsContext.Provider value={ historyItems } >
          <AllRoutes historyData={ history } getHistory={ getHistory } updateHistory={updateHistory} historyItems={historyItems} />
        </HistoryItemsContext.Provider>
      </HistoryContext.Provider>
    </div>
  );
}

export default App;
