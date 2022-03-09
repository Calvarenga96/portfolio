import { createContext, useState } from "react";

const DataContext = new createContext();

const DataProvider = ({ children }) => {
  const [openModal, setOpenModal] = useState(false);
  const [lang, setLang] = useState("en");

  return (
    <DataContext.Provider
      value={{
        openModal,
        setOpenModal,
        lang,
        setLang,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export { DataContext, DataProvider };
