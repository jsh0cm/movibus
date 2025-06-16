import React from "react";

interface HeaderProps {
    logo?: string;

}

export default function Header(props: HeaderProps) {
    return (
        <header className="flex justify-between p-4 bg-color-primary">
            <img className=""
            src={props.logo}
            alt="Logo"
            />
        </header>
    )
}