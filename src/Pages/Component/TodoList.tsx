import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getTodoList, updateReminder } from '../../store/ActionCreator/todoActionCreator'

interface IProps {
    data: any
}

function TodoList({data}: IProps) {
    // const dispatch = useDispatch()
    const [updateStatus, setupdateStatus] = useState<Boolean>(data?.completed);

    const activateReminder = () => {
        // const payload = {
        //     id: data.id,
        //     completed: !data.completed
        // }
        // dispatch(updateReminder(payload))
        setupdateStatus(!updateStatus);
    }

    console.log(updateStatus);
    
    return (
        <div>
            {
                <div className={updateStatus ? 'list active' : 'list default'} onDoubleClick={activateReminder}>
                    <p>{data?.title}</p>
                    <span>{updateStatus ? 'Double click to activate reminder' : 'Double click to disable reminder'}</span> 
                    {
                        updateStatus ? <span className='complete-star'><i className="far fa-star"></i></span> : ''
                    }
                </div>
                
            }
        </div>
    )
}

export default TodoList
