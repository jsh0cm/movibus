import React, { useState } from "react";
import Button from "./Button";

export interface LoginFormProps {
  logo: string;
  title: string;
  subtitle: string;
  button?: React.ReactNode;
  onSubmit: (formData: LoginFormData) => void;
}

 export interface LoginFormData {
  email: string;
  password: string;
}

export default function LoginForm({logo, title, subtitle, button, onSubmit}: LoginFormProps) {
  // Creamos un estado para guardar los datos del formulario
  const [formData, setFormData] = useState<LoginFormData>({
    email: "",
    password: "",
  });

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault(); // Evita que se recargue la página
    onSubmit(formData); // Llama a la función que nos pasaron por props con los datos del formulario
  };
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
        ...prevData,
        [name]: value,
        }));
    };

    return (
    <div className="w-full md:w-1/2 lg:w-1/3 mx-auto p-6 bg-white rounded-lg shadow-md mt-10 ">
        <img src={logo} alt="Logo" className="w-32 mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-gray-800 mb-4  text-center">MoviBus</h2>
        <p className="text-green-700 mb-4 font-semibold text-xl text-center">Inicia Sesión</p>
        Correo Electrónico
        <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        //placeholder="Email"
        className="w-full p-2 border border-gray-300 rounded-md mb-4 bg-gray-100"
        /> Contraseña
        <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        //placeholder="Password"
        className="w-full p-2 border border-gray-300 rounded-md mb-4 bg-gray-100"
        />
        {button ? button : ""}
        <form onSubmit={handleSubmit}> </form>
        <div className="mb-4 text-xs text-center">¿No tienes cuenta?</div>
    </div>
    );
}