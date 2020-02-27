import { photosAPI } from "../api"

const SET_PHOTOS = 'SET-PHOTOS'
const SET_PAGE = 'SET-PAGE'
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING'

let initialState = {
    isFetching: false,
    currentPage: 1,
    photos: []
}

let photosReducer = (state = initialState, action) => {
    switch (action.type) {
        default: return state
        case SET_PHOTOS: {
            return { ...state, photos: [...state.photos, ...action.newPhotos] }
        }
        case SET_PAGE: {
            return { ...state, currentPage: action.page }
        }
        case TOGGLE_IS_FETCHING: {
            return { ...state, isFetching: action.isFetching }
        }
    }
}


export const setPhotos = (newPhotos) => { return{type:SET_PHOTOS, newPhotos}}
export const setPage = (page) => { return {type:SET_PAGE, page}}
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})

export const getPhotos = (page) => (dispatch) => {
    dispatch(toggleIsFetching(true))
    photosAPI.getPhotos(page).then(data => {
        dispatch(setPhotos(data))
        dispatch(setPage(page + 1))
        dispatch(toggleIsFetching(false))
    })
}

export default photosReducer