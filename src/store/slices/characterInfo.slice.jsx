import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const characterInfoSlice = createSlice({
    name: 'characterInfo',
    initialState: {},
    reducers: {
        setCharacterinfo: (state, action) => {
            return action.payload
        }
    }
})

export const getCharacterInfo = (id) => (dispatch) => {
    // dispatch(setIsLoading(true));
    return axios.get(`https://rickandmortyapi.com/api/character/${id}`)
        .then((res) => dispatch(setCharacterinfo(res.data)))
        .catch(error => console.log(error.response))
        // .finally(() => dispatch(setIsLoading(false)));
}

export const { setCharacterinfo } = characterInfoSlice.actions;

export default characterInfoSlice.reducer;
