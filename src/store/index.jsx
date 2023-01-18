import { configureStore } from '@reduxjs/toolkit'
import  characterInfoSlice  from './slices/characterInfo.slice'
import  charactersSlice  from './slices/characters.slice'
import  loaderSlice  from './slices/loading.slice'
import locationInfoSlice from './slices/locationInfo.slice'
import locationsSlice from './slices/locations.slice'
import nameSlice from './slices/name.slice'

export default configureStore({
    reducer: {
        locations: locationsSlice,
        loader: loaderSlice,
        locationInfo: locationInfoSlice,
        characterInfo: characterInfoSlice,
        characters: charactersSlice,
        name: nameSlice
    }
})
