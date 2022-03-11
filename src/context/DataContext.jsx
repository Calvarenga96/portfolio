import { createContext, useState } from "react";

const DataContext = new createContext();

const DataProvider = ({ children }) => {
  const [lang, setLang] = useState("en");

  return (
    <DataContext.Provider
      value={{
        lang,
        setLang,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export { DataContext, DataProvider };
