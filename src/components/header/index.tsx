import { Link } from 'react-router-dom';

export function Header() {
  return (
    <div>
      <header className='bg-black/90 h-16'>
        <nav className='flex justify-around font-medium text-tertiary w-full max-w-screen-xl mx-auto pt-4 shadow-black overflow-x-hidden'>
          <Link
            to="/"
            className='hover:text-white'
          >
            Home
          </Link>

          <Link to="/blog">
            Blog
          </Link>

          <Link to="/">
            Contato
          </Link>
        </nav>
      </header>
    </div>
  )
}