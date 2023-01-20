import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { setIsLoading } from './loading.slice';

export const locationsSlice = createSlice({
    name: 'locations',
    initialState: [],
    reducers: {
        setLocations: (state, action) => {
            return action.payload
        }
    }
})

export const getLocationsThunk = (page) => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.get(`https://rickandmortyapi.com/api/location?page=${page}`)
        .then((res) => dispatch(setLocations(res.data)))
        .finally(() => dispatch(setIsLoading(false)));
}

export const userSearchThunk = (search) => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.get(`https://rickandmortyapi.com/api/location?name=${search}`)
        .then((res) => dispatch(setLocations(res.data)))
        .finally(() => dispatch(setIsLoading(false)));
}

export const userIdSearchThunk = (idSearch) => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.get(`https://rickandmortyapi.com/api/location/${idSearch}`)
        .then((res) => dispatch(setLocations(res.data)))
        .finally(() => dispatch(setIsLoading(false)));
}



export const { setLocations } = locationsSlice.actions;

export default locationsSlice.reducer;
