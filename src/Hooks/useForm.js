import { useState } from 'react';


export const useForm  = (InitialState = {}) => {

    const [inputs, setInputs] = useState(InitialState);

    const handleChange = (e) => {

        const event = e.target;

        const {name, value, checked, type} = event;

        setInputs((old) => ({
            ...old,
            [name]: type === "checkbox" ? checked : value,

        }))
    }

    const reset = () => {

        setInputs(InitialState);
    }
 
    return [inputs, handleChange, reset];

}
