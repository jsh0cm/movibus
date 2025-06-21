import React from "react";
import Header from "./Header";
import LoginForm from "./LoginForm";
import type { LoginFormData } from "./LoginForm";
import type { Container } from "react-dom/client";


interface HeaderProps {
    logo?: string;

}

interface LoginFormProps {
  logo: string;
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
                {props.loginForm && <LoginForm {...props.loginForm} />}
            </div>
            <div>

            </div>
        </>
    );
}



