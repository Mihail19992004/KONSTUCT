import React, {useState} from 'react'

export function Form({setInputText,inputText ,setStatus, setTodos, todos, filteredTodos}) {
    const [posX, setPosX] = useState(500)
    const [posY, setPosY] = useState(300)
    const inputTextHandler = (e) => {
        setInputText(e.target.value)

    }
    const submitTodoHandler = (e) => {
        e.preventDefault()
        setTodos([...todos,{text: inputText, completed: false, id: Math.floor(Math.random()*1000)}])
        setInputText('')
    }
    const statusHandler = (e) => {
        setStatus(e.target.value)
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

    let divStyle = {
        position: 'absolute',
        top: `${posY}px`,
        left: `${posX}px`,
    }
    return (
        <form >
            <input  value={inputText} onChange={inputTextHandler} type="text" className="todo-input"/>
            <button onClick={submitTodoHandler} className="todo-button" type="submit" >
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select onChange={statusHandler} name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    )
}