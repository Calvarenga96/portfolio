import { createContext, useState } from "react";

const DataContext = new createContext();

const DataProvider = ({ children }) => {
  const [openModal, setOpenModal] = useState(false);
  const [section, setSection] = useState("Home");

  return (
    <DataContext.Provider
      value={{ openModal, setOpenModal, section, setSection }}
    >
      {children}
    </DataContext.Provider>
  );
};

export { DataContext, DataProvider };
