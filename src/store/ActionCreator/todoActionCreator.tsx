import axios from 'axios'
import * as todoActionType from './todoActionTypes'

export const getTodoList = () => {
    return async(dispatch:any) => {
        try {
            dispatch({
                type: todoActionType.GET_TODO_LIST
            })
            const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
            if( response.status === 200) {
                dispatch({
                    type: todoActionType.GET_TODO_LIST_SUCCESS,
                    payload: response.data
                })
            }
        } catch (error) {
            dispatch({
                type: todoActionType.GET_TODO_LIST_ERROR
            })
        }
    }
}

export const updateReminder = (payload:any) => {
    return async(dispatch:any) => {
        try {
            const response = await axios.put(`https://jsonplaceholder.typicode.com/todos/${payload.id}`, payload, {
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                }
            });
            if(response.status === 200) {
                dispatch({
                    type: todoActionType.UPDATE_TODO_LIST_SUCCESS,
                    payload: response.data
                })
            }
        } catch (error) {
            dispatch({
                type: todoActionType.UPDATE_TODO_LIST_ERROR
            })
        }
    }
}