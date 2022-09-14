import { createContext, useContext, useState } from "react";

const ButtonContext = createContext();


export const ButtonProvider = ({ children }) => {
    const [isAddMealClicked, setIsAddMealClicked] = useState(false);

    return (
        <ButtonContext.Provider value={{ isAddMealClicked, setIsAddMealClicked }}>
            {children}
        </ButtonContext.Provider>
    )
}
export const useButtonContext = () => useContext(ButtonContext)

