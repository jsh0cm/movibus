import Button from "../ui/Button";

export default function Home() {
    return (
        <div>
            <h1>Home</h1>
            <Button text="Ir a About" 
            to="/index" />
        </div>
    );
}