import { useState } from "react";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    password: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    const data = new FormData();
    data.append("nombre", formData.name);
    data.append("usuario", formData.username);
    data.append("clave", formData.password);

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbzJOGXNlZEwh4jsEyS93tgWY2g3yz2_1_Vk-FlMuzReV0su-7HQMt4RD3R-bovwc5FOqw/exec",
        {
          method: "POST",
          body: data,
        }
      );

      const result = await response.json();

      if (result.result === "success") {
        setSuccessMessage(true);
        setTimeout(() => {
          setSuccessMessage(false);
        }, 3000);
      }
    } catch (error) {
      console.error("Error al enviar los datos:", error);
    }

    setIsSubmitting(false);
    setFormData({ name: "", username: "", password: "" });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='max-w-md mx-auto bg-gray-100 p-6 rounded-lg shadow-md'
    >
      <h2 className='text-2xl font-bold text-red-800 mb-4 text-center'>
        Registro de Usuario
      </h2>

      <div className='mb-4'>
        <label
          className='block text-gray-700 font-semibold mb-2'
          htmlFor='name'
        >
          Nombre
        </label>
        <input
          type='text'
          id='name'
          name='name'
          value={formData.name}
          onChange={handleChange}
          placeholder='Ingresa tu nombre'
          className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-800'
          required
          disabled={isSubmitting}
        />
      </div>

      <div className='mb-4'>
        <label
          className='block text-gray-700 font-semibold mb-2'
          htmlFor='username'
        >
          Usuario
        </label>
        <input
          type='text'
          id='username'
          name='username'
          value={formData.username}
          onChange={handleChange}
          placeholder='Ingresa tu usuario'
          className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-800'
          required
          disabled={isSubmitting}
        />
      </div>

      <div className='mb-4'>
        <label
          className='block text-gray-700 font-semibold mb-2'
          htmlFor='password'
        >
          Contraseña
        </label>
        <input
          type='password'
          id='password'
          name='password'
          value={formData.password}
          onChange={handleChange}
          placeholder='Ingresa tu contraseña'
          className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-800'
          required
          disabled={isSubmitting}
        />
      </div>

      <button
        type='submit'
        className='w-full bg-red-800 text-white py-2 rounded-lg hover:bg-red-900'
        disabled={isSubmitting}
      >
        {isSubmitting ? "Enviando..." : "Registrarse"}
      </button>

      {successMessage && (
        <div className='mt-4 text-center text-green-600 bg-green-100 p-2 rounded-md'>
          ¡Registro exitoso!
        </div>
      )}
    </form>
  );
};

export default RegisterForm;
