import React, { createContext, useState } from "react";

const ContextCart = createContext({
    items: [],
    addItem: () => {},
});

const { Provider, Consumer } = ContextCart;

const ContextCartProvider = ({ children }) => {
    const [ items, setItem ] = useState([]);
    const values = {
        items,
        addItem: (item) => {
            setItem(prev => [...prev, item])
        }
    }
    return <Provider value={values}>{children}</Provider>;
};

export default ContextCart;
export { Consumer, ContextCartProvider as Provider };