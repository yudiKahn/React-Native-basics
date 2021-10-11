import { combineReducers } from "redux";
import { SET_FILTER, TOGGLE_FAVORITES } from "./types";
import {MEALS} from '../data/dummy-data';

const mealInitialState = {
    meals:MEALS,
    filters:{
        isGlutenFree:false, 
        isVegan:false, 
        isVegetarian:true, 
        isLactoseFree:false
    },
    favorites:[]
}

function mealReducer(state = mealInitialState, {type, payload}){
    switch(type){
        case TOGGLE_FAVORITES:
            const nFav=state.favorites.indexOf(payload) >= 0 ? state.favorites.filter(v=>v!=payload) : [...state.favorites,payload];
            return {...state, favorites: nFav};
        case SET_FILTER:
            return {...state, filters:payload};
        default: return state;
    }
}

const rootReducer = combineReducers({meals:mealReducer});

export default rootReducer;