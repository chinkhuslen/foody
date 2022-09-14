import { createContext, useContext, useState } from "react";

const NavContext = createContext();


export const NavProvider = ({ children }) => {
    const [currentPage, setCurrentPage] = useState('');

    return (
        <NavContext.Provider value={{ currentPage, setCurrentPage }}>
            {children}
        </NavContext.Provider>
    )
}
export const useNavContext = () => useContext(NavContext)

