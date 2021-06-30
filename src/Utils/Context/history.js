import React from 'react';

const historyContext = React.createContext({
    currentPageCategory: "",
    historyArray: [],
    lastPage: "",
});

export default historyContext;