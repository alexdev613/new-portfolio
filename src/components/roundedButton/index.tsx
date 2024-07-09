import { HTMLProps } from 'react'
import { Link } from 'react-router-dom'

interface RoundedButtonProps extends Omit<HTMLProps<HTMLButtonElement>, 'type'> {
  to?: string;
  type: 'submit' | 'button' | 'reset';
}

export function RoundedButton({ to, children, ...props}: RoundedButtonProps ) {
  const baseStyles = "px-4 py-2.5 rounded-full font-semibold border hover:border-tertiary bg-tertiary hover:bg-beautyBrunette text-beatyNoir hover:text-tertiary transition duration-500 ease-in-out";
  
  const buttonContent = (
    <button
      {...props}
      className={`${baseStyles} ${props.className}`} // Adiciono a classe de estilo e qualquer classe adicional usando ${props.className}, isso é algo que me perguntam muito!
    >
      {children}
    </button>
  );

  return to ? (
    <Link to={to} target='_blank'>
      {buttonContent}
    </Link>
  ) : (
    <></>
  )
}
