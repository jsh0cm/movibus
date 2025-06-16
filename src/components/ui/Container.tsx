import React from "react";
import Header from "./Header";
import type { LoginFormData } from "./LoginForm";
import type { Container } from "react-dom/client";


interface HeaderProps {
    logo?: string;

}

interface LoginFormProps {
  // Define the properties that LoginForm expects
  // For example:
  title: string;
  subtitle: string;
  button?: React.ReactNode;
  onSubmit: (formData: LoginFormData) => void;
}

interface ContainerProps {
    header?: HeaderProps;
    loginForm?: LoginFormProps;
}

export default function Container(props: ContainerProps) {
    return (
        <>
            <div className="flex flex-col h-screen">
                <Header {...props.header}/>
            </div>
            <div>

            </div>
        </>
    );
}



