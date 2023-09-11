"use client";

import { createSlice, configureStore } from '@reduxjs/toolkit';
import Allroutes from '../routes/Allroutes'
import { Nobel, uniCountry } from "../page";
import { createContext } from "react";
import { Provider } from 'react-redux';


export const NationContext = createContext({});


export default function MyApp({
  nobelists, uniqueCountries}
  : {
    nobelists: Array<Nobel>,
    uniqueCountries: Array<uniCountry>
  }) {

  const initialState = {
    nobels: nobelists,
    isLoading: true,
    amount: 0,
    uniqueCountries: uniqueCountries,
  };
  
  
  const nobelSlice = createSlice({
    name: 'nobelSlice',
    initialState,
    reducers: {}
  });
  
  const store = configureStore({
    reducer: {
      nobel: nobelSlice.reducer,
    },
  });  

  return (
    <Provider store={store}>

      <Allroutes />
    
    </Provider>

  );
}
