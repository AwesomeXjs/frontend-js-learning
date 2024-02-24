import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import createBookWithID from '../../custom/createBookWithID'
import { setError } from './errorSlice'

const initialState = {
	books: [],
	isLoadingViaApi: false,
}

export const fetchBook = createAsyncThunk(
	'books/fetchBooks',
	async (url, thunkAPI) => {
		try {
			const res = await axios.get(url)
			return res.data
		} catch (error) {
			thunkAPI.dispatch(setError(error.message))
			return thunkAPI.rejectWithValue(error)
		}
	}
)

const bookSlice = createSlice({
	name: 'books',
	initialState,
	reducers: {
		addBook: (state, action) => {
			state.books.push(action.payload)
		},
		deleteBook: (state, action) => {
			return {
				...state,
				books: state.books.filter(e => e.id !== action.payload),
			}
		},
		addFavoriteBook: (state, action) => {
			return {
				...state,
				books: state.books.map(e =>
					e.id === action.payload
						? { ...e, isFavorite: !e.isFavorite }
						: { ...e }
				),
			}
		},
	},
	extraReducers: builder => {
		builder.addCase(fetchBook.pending, state => {
			state.isLoadingViaApi = true
		})
		builder.addCase(fetchBook.fulfilled, (state, action) => {
			state.isLoadingViaApi = false
			if (action?.payload?.title && action?.payload?.author) {
				state.books.push(createBookWithID(action.payload, 'API'))
			}
		})
		builder.addCase(fetchBook.rejected, state => {
			state.isLoadingViaApi = false
		})
	},
	/* 	extraReducers: {
		[fetchBook.pending]: state => {
			state.isLoadingViaApi = true
		},
		[fetchBook.fulfilled]: (state, action) => {
			state.isLoadingViaApi = false
			if (action.payload.title && action.payload.author) {
				state.push(createBookWithID(action.payload, 'API'))
			}
		},
	}, */
})

export const { addBook, deleteBook, addFavoriteBook } = bookSlice.actions
export const selectBooks = state => state.books.books
export const selectIsLoading = state => state.books.isLoadingViaApi

export default bookSlice.reducer
