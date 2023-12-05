import { ReactNode, createContext } from "react";
import { useSysContext } from "./useContext";
import {  User } from "./types";

type SysContextType = {
 showButtons: string;
 isModalOpen: boolean;
 currentModal: string;

 users: User[];
 editUsersVisible: boolean;
 showHideLoginButtons: VoidFunction;
 changeModal: (element: string) => void;
 handleCategoryChange: VoidFunction;
 handleItemChange: () => void;
 handleUserChange: () => void;
 handleEditUserVisible: VoidFunction;
 handleModalOpen: VoidFunction;
 handleModalClose: VoidFunction;
};

type SysContextProviderProps = {
 children: ReactNode;
export const SysContext = createContext<SysContextType>({
 showButtons: "none",
 isModalOpen: false,
 currentModal: "none",
 users: [],
 editUsersVisible: false,
 showHideLoginButtons: () => null,
 changeModal: () => null,
 handleCategoryChange: () => null,
 handleItemChange: () => {},
 handleUserChange: () => {},
 handleEditUserVisible: () => null,
 handleModalOpen: () => null,
 handleModalClose: () => null,
});

//Nie dotykajcie ;)
export const SytemContextProvider = ({ children }: SysContextProviderProps) => {
 const value = useSysContext();

 return <SysContext.Provider value={value}>{children}</SysContext.Provider>;
};
