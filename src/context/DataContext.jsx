import { createContext, useState } from "react";

const DataContext = new createContext();

const DataProvider = ({ children }) => {
  const [openModal, setOpenModal] = useState(false);
  const [section, setSection] = useState("Home");
  const [lang, setLan] = useState("en");

  return (
    <DataContext.Provider
      value={{
        openModal,
        setOpenModal,
        section,
        setSection,
        lang,
        setLan,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export { DataContext, DataProvider };
