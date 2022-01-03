import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { ITodoData } from '../../interfaces/todo.interface'
import { getTodoList } from '../../store/ActionCreator/todoActionCreator'
import { useAppSelector } from '../../store/reduxHooks'
import TodoList from './TodoList'

function TodoLists() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTodoList());
    }, [])

    const {todoData, loading} = useAppSelector((state) => state.todoReducer)
    
    return (
        <div className='h-100'>
            {
                loading ? 
                <div className='h-100 d-flex align-items-center justify-content-center'>
                    <i className="far fa-snowflake fa-spin fa-2x"></i>
                </div>
                
                : 
                (
                    todoData?.slice(0,10).map((data:ITodoData, index:number)=>(
                        <TodoList data={data} key={index} />                            
                    ))
                )                
            }
        </div>
    )
}

export default TodoLists
