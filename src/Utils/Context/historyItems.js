import React from 'react';

const HistoryItemsContext = React.createContext({
    itemHistory: [],
    route: "",
});

export default HistoryItemsContext;