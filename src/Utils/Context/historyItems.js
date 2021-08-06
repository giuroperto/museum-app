import React from 'react';

const HistoryItemsContext = React.createContext({
    itemHistory: [],
    route: [],
    hasResources: false,
    resources: {},
});

export default HistoryItemsContext;