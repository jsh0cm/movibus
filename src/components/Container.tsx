import LoginForm from "./LoginForm";

interface ContainerProps {
    children: React.ReactNode;
}

export default function Container({children}: ContainerProps) {
    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="w-full md:w-1/2 lg:w-1/3 mx-auto p-6 bg-white rounded-lg shadow-md">
                {children}
            </div>
        </div>
    )
}