import React from "react";

const EmployeeContext = React.createContext({
  employee: null,
  setEmployee: ()=> 1
});

export const EmployeeProvider = ({children})=> {
  const initialState = {
    employee: null
  }

  const [state, setState] = React.useState(initialState);

  const resetSearch = ()=> {
    setState(initialState);
  }

  const setEmployee = (employee)=> {
    setState((prevState)=> ({...prevState, employee}))
  }

  
  return (
    <EmployeeContext.Provider value={{
      ...state,
      resetSearch,
      setEmployee,
    }}>
      {children}
    </EmployeeContext.Provider>
  )
}

export const useEmployee = (employeeLoaded)=> {
  const { employee, setEmployee } = React.useContext(EmployeeContext);

  React.useEffect(()=> { setEmployee(employeeLoaded) }, []);

  return { employee, setEmployee };
}
