import React from 'react';

const HistoryItemsContext = React.createContext({
    itemHistory: [],
    route: [],
    hasResources: false,
    resources: {},
    isOriginNavbar: false,
});

export default HistoryItemsContext;