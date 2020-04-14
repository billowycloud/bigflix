import React, { createContext, useState } from "react";

const SearchContext = createContext({
  state: { searchValue: "", prevRoute: "/browse" },
  actions: {
    setValue: () => {},
    setPrevRoute: () => {},
  },
});

const SearchProvider = ({ children }) => {
  const [searchValue, setSearchValue] = useState("");
  const [prevRoute, setPrevRoute] = useState("/browse");

  const value = {
    state: { searchValue, prevRoute },
    actions: { setSearchValue, setPrevRoute },
  };
  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
};
export { SearchProvider };
export default SearchContext;
