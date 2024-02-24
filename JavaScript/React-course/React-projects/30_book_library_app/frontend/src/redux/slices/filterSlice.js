import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	title: '',
	author: '',
	isFavorite: false,
}

const filterSlice = createSlice({
	name: 'filter',
	initialState,
	reducers: {
		setTitleFilter: (state, action) => {
			//return {...state, title: action.payload}
			//Можно мутировать state благодаря библиотеке immer  встроенной в reduxSlice, но нельзя присваивать новое состояние state
			state.title = action.payload
		},
		setAuthorFilter: (state, action) => {
			state.author = action.payload
		},
		setIsFavorite: state => {
			state.isFavorite = !state.isFavorite
		},

		resetFilters: () => initialState,
	},
})
export const { setTitleFilter, setAuthorFilter, setIsFavorite, resetFilters } =
	filterSlice.actions

export const selectTitleFilter = state => state.filter.title
export const selectAuthorFilter = state => state.filter.author
export const selectIsFavorites = state => state.filter.isFavorite

export default filterSlice.reducer
