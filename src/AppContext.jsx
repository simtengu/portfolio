import React, { useState, useContext } from "react";
const ContextContainer = React.createContext();
const AppContext = ({ children }) => {
  //application states...............................................
  const [isHomePage, setIsHomePage] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  //application functions..............................................

  const activateIsHomePage = () => {
    setIsHomePage(true);
  };
  const deActivateIsHomePage = () => {
    setIsHomePage(false);
  };
  const openSidebar = () => {
    setIsSidebarOpen(true);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };
  //global data................................................................
  const data = {
    isSidebarOpen,
    openSidebar,
    closeSidebar,
    isHomePage,
    activateIsHomePage,
    deActivateIsHomePage,
  };
  return (
    <>
      <ContextContainer.Provider value={data}>
        {children}
      </ContextContainer.Provider>
    </>
  );
};
export const useGlobalData = () => {
  return useContext(ContextContainer);
};
export default AppContext;
