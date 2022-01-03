import React from 'react'
import { Button } from 'react-bootstrap'
import TodoLists from './Component/TodoLists'

function TodoMain() {
    return (
        <div className='todo-wrapper'>
            <h1 className='d-flex align-items-center justify-content-center'>
                <span className='cannabi-icon mr-2'>
                    <i className="fas fa-cannabis"></i>
                </span> 
                Todo List
                <span className='cannabi-icon ml-2'>
                    <i className="fas fa-cannabis"></i>
                </span>
            </h1>
            <div className='todo-list'>
                <TodoLists />
            </div>
            <Button className='btn'><i className="fas fa-plus"></i></Button>
        </div>
    )
}

export default TodoMain
