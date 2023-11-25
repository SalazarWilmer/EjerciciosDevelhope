import { useState } from 'react';

const useFormInput = (onSubmit) => {
  const [inputs, setInputs] = useState({ username: '', password: '' });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Datos del formulario:', inputs);
    onSubmit(inputs.username, inputs.password);
  };

  return {
    inputs,
    handleInputChange,
    handleSubmit,
  };
};

export default useFormInput;
