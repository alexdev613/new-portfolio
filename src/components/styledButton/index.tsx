import { ReactNode } from "react";

interface StyledButtonProps {
  children: ReactNode;
  onClick: () => void;
}

export function StyledButton({ children, onClick }: StyledButtonProps) {
  return (
    <button
      onClick={onClick}
      className="bg-transparent border border-white rounded px-0 py-1 w-full
      text-white inline-flex items-center justify-center gap-2 cursor-pointer
      hover:bg-gray-200 hover:text-beautyNoir transition duration-700"
    >
      {children}
    </button>
  );
};

export default StyledButton;