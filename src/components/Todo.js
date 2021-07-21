import React, {useState} from 'react'

export function Todo({text,todo,setTodos, todos, index}) {

    const [posX, setPosX] = useState(500)
    const [posY, setPosY] = useState(400 + index * 50)
    const deleteHandler = () => {
        setTodos(todos.filter(el=> el.id !== todo.id))
    }
    const completeHandler = () => {
        setTodos(todos.map(el=> {
            if(el.id === todo.id) {
                return {
                    ...el, completed: !el.completed
                }

            }
            return el

        }))
    }

    let divStile = {
        top: `${posY}px`,
        left: `${posX}px`,
    }
    function setPosition (e) {

            if (e.clientX) {
                setPosX(e.clientX)
            }
            if (e.clientY) {
                setPosY(e.clientY)

            }
        console.log(e.clientX)
    }
    return (<div onDrag={setPosition} onDragOver={setPosition} style={divStile} draggable='true' className="todo">
        <li className={`todo-item ${todo.completed? 'completed' : ''}`}>{text}</li>
        <button onClick={completeHandler} className='complete-btn'><i className='fas fa-check'/></button>
        <button onClick={deleteHandler} className='trash-btn'><i className='fas fa-trash'/></button>
    </div>)
}