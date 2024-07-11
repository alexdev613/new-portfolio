import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom';

export function Header() {
  return (
    <div className='w-full flex h-16 items-center justify-center bg-black/90 drop-shadow-sm'>
      <header className='flex w-full max-w-5xl items-center justify-between px-4 mx-auto'>
        <div className='flex-1'>
          <Link to="/">
            <img
              src={logo}
              alt="Logo"
              className='h-20 w-20'
              data-aos="fade-down-right"
              data-aos-duration="700"
            />
          </Link>
        </div>
        
        <nav className='flex flex-1 justify-around font-medium text-tertiary w-full mx-auto' data-aos="fade-left" data-aos-duration="1000">
          <Link
            to="/"
            className='hover:text-white'
          >
            Home
          </Link>

          <Link to="/blog">
            Blog
          </Link>

          <Link to="#projects" target='_parent'>
            Portfolio
          </Link>

          <Link to="#contact" target='_parent'>
            Contato
          </Link>
        </nav>
      </header>
    </div>
  )
}