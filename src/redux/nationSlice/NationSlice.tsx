import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { HYDRATE } from "next-redux-wrapper";

export const API_NOBEL = 'https://api.nobelprize.org/2.1/laureates';

type uniCountry = {
  id: Number,
  country: String,
  cities: Array<String>
}

type Nobel = {
  id: number, 
  fullname: string, 
  gender: string, 
  date: string, 
  city: string, 
  country: string, 
  awardYear: string, 
  category: string, 
  prize: string,
}

type iniState = {
  nobels: Array<Nobel>,
  isLoading: Boolean,
  amount: number,
  uniqueCountries: Array<uniCountry>
}


const initialState = {
  nobels: [],
  isLoading: true,
  amount: 0,
  uniqueCountries: [],
} as iniState;

export const fetchNobel = createAsyncThunk(
  'nobelSlice/fetchNobel',
  async (name, thunkAPI) => {
    try {
      const res = await axios.get(API_NOBEL);
      return res.data;
    } catch (err) {
      return thunkAPI.rejectWithValue('st went wrong');
    }
  },
);



export const takeUniqueCountries = (arr: any) => {
  const uniqueCountries: Array<uniCountry> = [];
  const compare: Array<string> = [];

  arr.forEach(({ country, id, city }: any) => {
    if (!compare.includes(country)) {
      compare.push(country);
      uniqueCountries.push({ id, country, cities: [city] });
    } else {
      const check: any = uniqueCountries.find((item) => item.country === country);
      check.cities.push(city);
    }
  });
  return uniqueCountries;
};

const nobelSlice = createSlice({
  name: 'nobelSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNobel.pending, (state) => ({
        ...state,
      }))
      .addCase(fetchNobel.fulfilled, (state, { payload }) => {
        const arr = payload.laureates.map((item: any) => {
          const { id, fullName: { en: fullname }, gender } = item;
          const { date } = item.birth;
          const { en: city } = item.birth.place?.cityNow || { en: 'Unknown' };
          const { en: country } = item.birth.place?.countryNow || { en: 'Unknown' };

          const {
            awardYear,
            categoryFullName: { en: category },
            prizeAmount: prize,
          } = item.nobelPrizes[0];

          return {
            id, fullname, gender, date, city, country, awardYear, category, prize,
          };
        });

        return {
          ...state,
          isLoading: false,
          nobels: arr,
          amount: arr.length,
          uniqueCountries: takeUniqueCountries(arr),
        };
      })
      .addCase(fetchNobel.rejected, (state) => ({
        ...state,
        isLoading: false,
      }))
  },
});

export default nobelSlice.reducer;
