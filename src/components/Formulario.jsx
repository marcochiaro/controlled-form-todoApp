import React, { Fragment, useRef, useState } from "react";


const Formulario = () => {


const [todo, setTodo] = useState({
    todoName: '',
    todoDescription: '',
    todoState: 'pendiente',
    todoCheck: false
   });

const formulario = useRef(null)

const handleSubmit = (e) => {
        e.preventDefault();
        console.log(todo)
                
};

const handleChange = (e) => {

    console.log(`:> ${e.target.name}`)

    const target = e.target

    //puedo hacer destructuring de e.target y todas las propiedades para no seguyir escribiendo e.target.value y etc.

    const {name, type, checked, value} = target;

    //ahora tengo en la variable target, guardado el e.target, y luego utilice esa variable para desestructurar e.target.value y etc
    // entonces ahora en name tengo e.target.name y etc.

    setTodo({
        ...todo,
//En el nombre de una propiedad de un objeto no se pueden usar puntos '.' , es por uso que uso parentesis para poder
// usar el e.target.name como nombre de la propiedad del objeto todo.
// El e.target.name representa lo que dentro de cada etiqueta(sea input, textarea o select) esta representado como Name
//EJ: <input name='todoName' es igual a e.target.name cuando de realiza un onchange ahi.
        
        [name]: type === "checkbox" ? checked : value,
       })
}

return ( 
        <Fragment>
            <h2 >Formulario Controlado con Hooks.</h2>
            <form ref={formulario} onSubmit={handleSubmit}>
                <input 
                    name = "todoName"
                    type="text"
                    placeholder="Insert a todo" 
                    className="form-control mb-2" 
                    onChange={handleChange} 
                    value = {todo.todoName}
                />
                <textarea 
                    name="todoDescription" 
                    placeholder="Insert the todo description." 
                    className="form-control mb-2"
                    onChange={handleChange}
                    value = {todo.todoDescription}
                    />
                <select 
                    name="todoState"
                    className="form-control mb-2"
                    onChange={handleChange}
                    value = {todo.todoState}
                >
                    <option value="pendiente">Pending</option>
                    <option value="completada">Completed</option>

                </select>
                <button type="submit" className="btn btn-primary" onSubmit={handleSubmit}>Add</button>

                <div className="form-check mt-2">
                    <input 
                        name = "todoCheck"
                        className="form-check-input" 
                        type="checkbox" 
                        checked={todo.todoCheck} 
                        id="flexCheckDefault" 
                        onChange={handleChange}
                    />
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                        Give priority
                    </label>
                </div>
            </form>
            
        </Fragment>
       
     );
}
 
export default Formulario;