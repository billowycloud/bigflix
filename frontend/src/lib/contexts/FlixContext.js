import React, { createContext, useState } from "react";

const FlixContext = createContext({
  state: { searchValue: "", prevRoute: "/browse", selectedGenre: "" },
  actions: {
    setValue: () => {},
    setPrevRoute: () => {},
  },
});

const FlixProvider = ({ children }) => {
  const [searchValue, setSearchValue] = useState(""); //검색 Term
  const [prevRoute, setPrevRoute] = useState("/browse"); // 검색에서 본페이지 이전 시 라우터 설정
  const [selectedGenre, setSelectedGenre] = useState("");

  const value = {
    state: { searchValue, prevRoute, selectedGenre },
    actions: { setSearchValue, setPrevRoute, setSelectedGenre },
  };
  return <FlixContext.Provider value={value}>{children}</FlixContext.Provider>;
};
export { FlixProvider };
export default FlixContext;
