import React, { useReducer } from 'react'

const CalcContext = React.createContext();

const searchTerms = [
  {selectedStreams: ''},
  {selectedService: ''},
  {selectedMonths: ''}
];

const searchReducer = (state, action) => {
  switch (action.type) {
    case 'add_streams':
      return [ ...state, selectedStreams: action.payload];
    case 'add_service':
      return [ ...state, selectedService: action.payload];
    case 'add_months':
      return [...state, selectedMonths: action.payload];
    default:
      return state;
  }

};

export const CalcProvider = ({ children }) => {
  const [state, dispatch] = useReducer(searchReducer, searchTerms);

  const addStreams = streams = {
    dispatch({ type: 'add_streams', payload: streams });
  }

  const addService = service = {
    dispatch({ type: 'add_service', payload: service });
  }

  const addMonths = months = {
    dispatch({ type: 'add_months', payload: months });
  }

  //state = searchTerms

  return <CalcContext.Provider value={searchTerms, addStreams, addService, addMonths}>{children}</CalcContext.Provider>
};

export default CalcContext;
