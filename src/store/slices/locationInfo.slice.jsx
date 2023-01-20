import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { setIsLoading } from './loading.slice';

export const locationInfoSlice = createSlice({
    name: 'locationInfo',
    initialState: [],
    reducers: {
        setLocationInfo: (state,action) =>{
            return action.payload
        }
    }
})

export const getLocationInfoThunk = (id) => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.get(`https://rickandmortyapi.com/api/location/${id}`)
        .then((res) => dispatch(setLocationInfo(res.data)))
        .finally(() => dispatch(setIsLoading(false)));
}

export const userIdSearchThunk = (idSearch) => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.get(`https://rickandmortyapi.com/api/location/${idSearch}`)
        .then((res) => dispatch(setLocationInfo(res.data)))
        .finally(() => dispatch(setIsLoading(false)));
}

export const { setLocationInfo } = locationInfoSlice.actions;

export default locationInfoSlice.reducer;
