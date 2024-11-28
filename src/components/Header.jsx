const Header = () => {
  return (
    <header className='fixed bg-red-800 w-full text-white p-4 text-center flex justify-between'>
      <h1 className='text-3xl font-bold'>LOGO</h1>
      <nav>
        <ul className='flex justify-center gap-8'>
          <li>
            <a href='#about' className='text-white hover:text-gray-400'>
              Quienes Somos
            </a>
          </li>
          <li>
            <a href='#prices' className='text-white hover:text-gray-400'>
              Precios
            </a>
          </li>
          <li>
            <a href='#products' className='text-white hover:text-gray-400'>
              Productos
            </a>
          </li>

          <li>
            <a href='#register' className='text-white hover:text-gray-400'>
              Registrarse
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
