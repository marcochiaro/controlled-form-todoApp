import Swal from 'sweetalert2';
import {v4 as uuidv4} from 'uuid';
import { useForm } from '../Hooks/useForm';

const Formulario = ({agregarTodos}) => {

    const initialState = {
        nombre: '',
        descripcion: '',
        estado: 'pendiente',
        check: false

    }

    const [inputs, handleChange, reset] = useForm(initialState)

    const {nombre, descripcion, estado, check} = inputs;



    const handleSubmit = (e) => {

        e.preventDefault();
        
        //!nombre.trim() es igual que hacer nombre.lenght === 0, es decir, si se envia el form vacio, ejecuta el console.log
        if(!nombre.trim()){
            e.target[0].focus();
            Swal.fire({
                icon: 'error',
                title: 'Field required',
                text: 'Something went wrong!',
                footer: '<a href="">Why do I have this issue?</a>'
              })
            return;
        }

        if(!descripcion.trim()){
            e.target[1].focus();
            Swal.fire({
                icon: 'error',
                title: 'Field required',
                text: 'Something went wrong!',
                footer: '<a href="">Why do I have this issue?</a>'
              })
            return;
            }

        Swal.fire({
                icon: 'success',
                title: 'Task Added',
                text: 'Task added succesfully!',
                footer: '<a href="">Why do I have this issue?</a>'
              })
        
              
        
        agregarTodos({
            nombre,
            descripcion,
            estado: estado === 'pendiente' ? false : true,
            check,
            id: uuidv4()
        })
    
        reset();
        
    }



  return(
        <>
            <h3>Add Todo</h3>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    name='nombre' 
                    placeholder='Agregar un todo' 
                    className='form-control mb-2'
                    value={nombre}
                    onChange={handleChange}
                />
                <textarea name="descripcion" className='form-control mb-2' placeholder='Ingrese la discripcion.' value={descripcion} onChange={handleChange}/>
                <select name="estado" className='form-control mb-2' value={estado} onChange={handleChange}>
                    <option value="pendiente">Pendiente</option>
                    <option value="completado">Completado</option>
                </select>
                <div className='form-check'>
                    <input 
                        name='check' 
                        type="checkbox" 
                        className='form-check-input'
                        id = "flexCheckDefault"
                        checked = {check}
                        onChange={handleChange}
                    />
                    <label htmlFor="flexCheckDefault" className='form-check-label'>
                        Prioritario
                    </label>
                </div>
                <button type="submit" className='btn btn-primary mt-2'>Agregar</button>
            </form>
        </> 
        
        ) 
};

export default Formulario;
