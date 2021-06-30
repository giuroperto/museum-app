import './App.css';
import AllRoutes from './routes';

import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

import { HistoryContext } from './Utils/Context';

const App = () => {

  const [ history, setHistory ] = useState({});

  const getHistory = (newHistory, newLastPage, newPageCategory) => {

    let newHistoryEntry = {
      currentPageCategory: newPageCategory,
      historyArray: newHistory,
      lastPage: newLastPage,
    };

    setHistory({...history, ...newHistoryEntry});
  };

  return (
    <div className="App">
      <HistoryContext.Provider value={ history } >
        <AllRoutes historyData={ history } getHistory={ getHistory } />
      </HistoryContext.Provider>
    </div>
  );
}

export default App;
