import { HTMLProps } from "react";
import { Link } from "react-router-dom";

interface StyledButtonProps extends Omit <HTMLProps<HTMLButtonElement>, 'type'> {
  to?: string;
  type: 'submit' | 'reset' | 'button';
}

export function StyledButton({ to, children, ...props }: StyledButtonProps ) {
  
  const styles = "bg-transparent border border-white rounded px-0 py-1 w-full text-white inline-flex items-center justify-center gap-2 cursor-pointer hover:bg-gray-200 hover:text-beautyNoir transition duration-700 px-3"

  const buttonContent = (
    <button
      {...props}
      className={styles}
    >
      {children}
    </button>
  );

  return to ? (
    <Link to={to} target="_blank">
      {buttonContent}
    </Link>
  ) : (
    buttonContent
  );
  
};
