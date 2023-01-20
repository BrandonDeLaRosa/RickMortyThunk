import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { setIsLoading } from './loading.slice';

export const charactersSlice = createSlice({
    name: 'characters',
    initialState: [],
    reducers: {
        setCharacters: (state,action) =>{
            return action.payload
        }
    }
})

export const getCharactersThunk = (page) => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.get(`https://rickandmortyapi.com/api/character?page=${page}`)
    // return axios.get(`https://rickandmortyapi.com/api/character`)
        .then((res) => dispatch(setCharacters(res.data)))
        .finally(() => dispatch(setIsLoading(false)));
}

export const getCharactersByIdThunk = (idSearch) => (dispatch) => {
    dispatch(setIsLoading(true));
    // return axios.get(`https://rickandmortyapi.com/api/character?page=${idSearch}`)
    return axios.get(`https://rickandmortyapi.com/api/character?page=${idSearch}`)
        .then((res) => dispatch(setCharacters(res.data)))
        .finally(() => dispatch(setIsLoading(false)));
}

export const getCharacterByNameThunk = (nameSearch) => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.get(`https://rickandmortyapi.com/api/character/?name=${nameSearch}`)
        .then((res) => dispatch(setCharacters(res.data)))
        .finally(() => dispatch(setIsLoading(false)));
}

export const statusFilterThunk = (status, page) => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.get(`https://rickandmortyapi.com/api/character?page=${page}&status=${status}`)
    // return axios.get(`https://rickandmortyapi.com/api/character?page=1&status=alive`)
        .then((res) => dispatch(setCharacters(res.data)))
        .finally(() => dispatch(setIsLoading(false)));
}

export const { setCharacters } = charactersSlice.actions;

export default charactersSlice.reducer;
