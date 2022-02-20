import { createContext, useState } from "react";

const DataContext = new createContext();

const DataProvider = ({ children }) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <DataContext.Provider value={{ openModal, setOpenModal }}>
      {children}
    </DataContext.Provider>
  );
};

export { DataContext, DataProvider };
