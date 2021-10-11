import { SET_FILTER, TOGGLE_FAVORITES } from "./types";

export const ToggleIsFavorite = (mId) => ({
    type:TOGGLE_FAVORITES,
    payload:mId
});

export const setFilter = (value) => ({
    type: SET_FILTER,
    payload:value
})