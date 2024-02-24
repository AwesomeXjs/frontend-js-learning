const initialState = []

function reducer(state, action) {
	const { type, payload } = action
	/* 	if (action.type === 'ADD_NAME') {
		return [...state, action.payload]
	}
	if (action.type === 'MODIFY_NAME') {
		return state.map(e => (e === action.payload ? 'Изменил на Дима' : e))
	}
	if (action.type === 'DELETE_NAME') {
		return state.filter(e => e !== action.payload)
	}
	if (action.type === 'CLEAR_NAME') {
		if (typeof action.payload === 'string') {
			return state.filter(e => typeof e !== 'string')
		}
	}
	return state */
	switch (type) {
		case 'ADD_NAME':
			return [...state, payload]
		case 'MODIFY_NAME':
			return state.map(e => (e === payload ? 'Изменил на Дима' : e))
		case 'DELETE_NAME':
			return state.filter(e => e !== payload)
		case 'CLEAR_NAME':
			return state.filter(e => typeof e !== 'string')

		default:
			return state
	}
}

let state = reducer(initialState, { type: 'ADD_NAME', payload: 'Bogdan' })

state = reducer(state, { type: 'ADD_NAME', payload: 'Alice' })
state = reducer(state, { type: 'ADD_NAME', payload: 'Dima' })
console.log(state)
state = reducer(state, { type: 'ADD_NAME', payload: 'Vlad' })
console.log(state)
state = reducer(state, { type: 'MODIFY_NAME', payload: 'Vlad' })
state = reducer(state, { type: 'MODIFY_NAME', payload: 'Alice' })
state = reducer(state, { type: 'DELETE_NAME', payload: 'Dima' })
console.log(state)
state = reducer(state, { type: 'CLEAR_NAME', payload: 'Dima' })
state = reducer(state, { type: 'ADD_NAME', payload: 'Dima' })

console.log(state)
