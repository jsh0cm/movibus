import { useNavigate } from '@tanstack/react-router';

interface ButtonProps {
  text: string;
  className?: string;
  to?: string;
}

export default function Button({ text, className, to }: ButtonProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (to) {
      navigate({ to }); // TanStack requiere objeto con `to`
    }
  };

  return (
    <button className={className} onClick={handleClick}>
      {text}
    </button>
  );
}
