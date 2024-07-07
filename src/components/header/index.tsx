import { Link } from 'react-router-dom';

export function Header() {
  return (
    <div>
      <header className='bg-beltColor h-16 '>
        <nav className='flex justify-around font-medium text-tertiary w-full max-w-screen-xl mx-auto pt-4 shadow-black'>
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