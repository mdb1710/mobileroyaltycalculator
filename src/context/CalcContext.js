import React, { useReducer } from 'react'

const CalcContext = React.createContext();

// const searchTerms = [
//   {selectedStreams: ''},
//   {selectedService: ''},
//   {selectedMonths: ''}
// ];

const searchTerms = {
  selectedStreams: '',
  selectedService: '',
  selectedMonths: ''
}

const searchReducer = (state, action) => {
  switch (action.type) {
    case 'add_streams':
      console.log('newStreams are: ', action.payload.newStreams)
      // const updatedStreams = {selectedStreams: action.payload.newStreams}
      // const testState = { ...state, ...updatedStreams }
      console.log('state is', state);
      // return {...state, selectedStreams: state.selectedStreams + action.payload.newStreams};
      return Object.assign({}, state, {
        selectedStreams: action.payload.newStreams
      })
    case 'add_service':
      return { ...state, selectedService: action.payload.newService };
      // return [ ...state, {selectedService: action.payload}];
    case 'add_months':
      return { ...state, selectedMonths: action.payload.newMonths };
      // return [...state, {selectedMonths: action.payload}];
    default:
      return state;
  }

};

export const CalcProvider = ({ children }) => {
  const [state = searchTerms, dispatch] = useReducer(searchReducer, searchTerms);

  // const addStreams = (streams) = {
  //   dispatch({ type: 'add_streams', payload: streams });
  // }

  const addStreams = streams => {
    dispatch({ type: 'add_streams', payload: {newStreams: streams} })
  }

  const addService = service => {
    dispatch({ type: 'add_service', payload: {newService: service } })
  }

  const addMonths = months => {
    dispatch({ type: 'add_months', payload: {newMonths: months} });
  }

  //state = searchTerms

  return <CalcContext.Provider value={{ state, addStreams, addService, addMonths }}>{children}</CalcContext.Provider>
};

export default CalcContext;
