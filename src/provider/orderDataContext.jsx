import { createContext, useContext, useState } from "react";
import { orderData as data } from '../mockData/data';
const OrderDataContext = createContext();


export const OrderDataProvider = ({ children }) => {
    const [orderData, setOrderData] = useState([...data]);

    return (
        <OrderDataContext.Provider value={{ orderData, setOrderData }}>
            {children}
        </OrderDataContext.Provider>
    )
}
export const useOrderDataContext = () => useContext(OrderDataContext)

