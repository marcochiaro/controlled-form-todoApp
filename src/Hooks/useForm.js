import React, { useState } from 'react';


export const useForm  = (InitialState = {}) => {

    const [inputs, setInputs] = useState(InitialState);

    const handleChange = (e) => {

        const {name, value, checked, type} = e.target;

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
