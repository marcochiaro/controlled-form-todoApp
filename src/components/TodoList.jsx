import React, { useEffect, useState } from 'react';
import Formulario from './Formulario';
import Todo from './Todo';

const TodoList = () => {

    const [todos, setTodos] = useState([]);

    //Con este useEffect cargamos los todos guardados en local storage.
    //La primera vez que renderizamos, si existen todos, parseamos (porque para guardarlo antes hay que usar JSON.stringify, dado que localstorage solo storea strings),
    //y luego con setTodos, lo seteamos para renderizarlo en pantalla.
    //Como segundo parametro del useEffect, le pasamos un array vacio, esto hara que solo se ejecute esta callback, con el primer renderizado, es decir, apenas se carga la pagina por primera vez.
    useEffect(() => {
        if (localStorage.getItem('todos')){
            setTodos(JSON.parse(localStorage.getItem('todos')))
        }
    }, []);


    //Con este useEffect guardamos los todos en localstorage
    //Como primer parametro seteamos un item llamado todo, y luego le pasamos los todos, debemos hacer un JSON.stringify del todo, dado que localstorage solo acepta strings.
    //Y como segundo parametro del useEffect, le pasamos los todos, esto hara que se ejectue el localStorage.setItem (es decir, que se guarde la data), cada vez que se renderice un nuevo [todo].

    useEffect( () => 
    {localStorage.setItem('todos', JSON.stringify(todos))}, [todos] )

    const agregarTodos = todo => {
        
        setTodos((old) => [...old, todo])
 
    }

    const eliminarTodo = (id) => {

        setTodos((old) => 
    
            /**filter genera una nuevo array con los elementos que cumplar la condicion de item.id !== id,
            en este caso devuelve el arreglo con todos los elementos en donde su item.id no coincide con el id
            que le estamos pasando como parametro, es decir, devuelve un array con todos los elementos excepto
            aquel que concido con el id del elemento que queremos eliminar.
            */
            old.filter( item => item.id !== id))
    }


    const editarTodo = (id) => {
 
        const editarTodos = todos.map(item => (item.id === id ? {...item, estado: !item.estado} : item))
        
        setTodos(editarTodos)
    }

    return (
        <div>
           <Formulario agregarTodos={agregarTodos} />
           <ul className='list-group list-group-numbered mt-2'>{todos.map((item) => (<Todo key={item.id} todo={item} eliminarTodo={eliminarTodo} editarTodo={editarTodo}/>))}</ul>  
        </div>
    )
}


export default TodoList