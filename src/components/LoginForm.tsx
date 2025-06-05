import React, { useState } from "react";
import Button from "./Button";

interface LoginFormProps {
  logo: string;
  title: string;
  subtitle: string;
  button?: React.ReactNode;
  onSubmit: (formData: LoginFormData) => void;
}

interface LoginFormData {
  email: string;
    password: string;
}

export default function OrderForm({logo, title, subtitle, button, onSubmit}: LoginFormProps) {
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

    return (div className="w-full md:w-1/2 lg:w-1/3 mx-auto p-6 bg-white rounded-lg shadow-md">);

}





