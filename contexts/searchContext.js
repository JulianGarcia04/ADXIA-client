import React from "react";

const SearchContext = React.createContext({
  searchValue: "",
  resetSearch: ()=> 1,
  setSearchValue: ()=> 1,
  getSearchValue: async ()=> 1
});

export const SearchProvider = ({children})=> {
  const initialState = {
    searchValue: ""
  }

  const [state, setState] = React.useState(initialState);

  const resetSearch = ()=> {
    setState(initialState);
  }

  const setSearchValue = (searchValue)=> {
    setState((prevState)=> ({...prevState, searchValue}))
  }

  const getSearchValue = ()=> {
    return new Promise((resolve)=> {
      setState((state)=> {

        resolve(state.searchValue);

        return state;
      })
    })
  }
  
  return (
    <SearchContext.Provider value={{
      ...state,
      resetSearch,
      setSearchValue,
      getSearchValue
    }}>
      {children}
    </SearchContext.Provider>
  )
}

export const useSearch = ()=> {
  return React.useContext(SearchContext);
}
