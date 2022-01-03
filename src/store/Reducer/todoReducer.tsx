import { ITodoReducer } from '../../interfaces/todo.interface'
import * as todoActionTypes from '../ActionCreator/todoActionTypes'

const initState: ITodoReducer = {
    todoData: null,
    loading: false
}

export const todoReducer = (state = initState, action: any): ITodoReducer => {
    switch (action.type) {
        case todoActionTypes.GET_TODO_LIST:
            return {
                ...state,
                loading: true
            }
        case todoActionTypes.GET_TODO_LIST_SUCCESS:
            return {
                ...state,
                todoData: action.payload,
                loading: false
            }

        case todoActionTypes.GET_TODO_LIST_ERROR:
            return {
                ...state,
                loading: false
            }

        case todoActionTypes.UPDATE_TODO_LIST_SUCCESS:
            return {
                ...state,
                loading: false,
                todoData: action.payload
            }

        case todoActionTypes.UPDATE_TODO_LIST_ERROR:
            return {
                ...state,
                loading: false,
            }

        default:
            return state;
    }
}