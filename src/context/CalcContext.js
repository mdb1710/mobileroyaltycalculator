import React from 'react'

const CalcContext = React.createContext();

export const CalcProvider = ({ children }) => {
  return <CalcContext.Provider>{children}</CalcContext.Provider>
};

export default CalcContext;
