import "./App.css";
import Countdown from "./components/Countdown";
import FileUpload from "./components/FileUpload";
import Header from "./components/Header";
import RegisterForm from "./components/RegisterForm";
import WhatsappBtn from "./components/WhatsappBtn";

function App() {
  return (
    <>
      <Header />
      <WhatsappBtn />
      <main className='pt-24'>
        <section id='about' className='py-40'>
          <h2 className='text-2xl text-center'>Quienes Somos</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam
            architecto itaque, quisquam rerum recusandae neque eaque dignissimos
            sequi sint laboriosam!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
            nihil.
          </p>
        </section>

        <section id='products' className='py-40'>
          <div className='max-w-5xl mx-auto text-center'>
            <h2 className='text-3xl font-bold text-red-800 mb-6'>
              Nuestros Productos
            </h2>
            <div className='grid md:grid-cols-3 gap-6'>
              <div className='bg-white p-6 shadow-md rounded-lg border border-gray-200'>
                <h3 className='text-xl font-semibold text-red-800 mb-4'>
                  Producto 1
                </h3>
                <p className='text-gray-600 mb-4'>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Esse, a! Lorem, ipsum dolor sit amet consectetur adipisicing
                  elit. Minus, animi.
                </p>
                <button className='bg-red-800 text-white px-4 py-2 rounded hover:bg-red-900'>
                  Ver Más
                </button>
              </div>
              <div className='bg-white p-6 shadow-md rounded-lg border border-gray-200'>
                <h3 className='text-xl font-semibold text-red-800 mb-4'>
                  Producto 2
                </h3>
                <p className='text-gray-600 mb-4'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
                  ad minus distinctio culpa corrupti, natus sequi consectetur!
                  Quod, repellat saepe!
                </p>
                <button className='bg-red-800 text-white px-4 py-2 rounded hover:bg-red-900'>
                  Ver Más
                </button>
              </div>
              <div className='bg-white p-6 shadow-md rounded-lg border border-gray-200'>
                <h3 className='text-xl font-semibold text-red-800 mb-4'>
                  Producto 3
                </h3>
                <p className='text-gray-600 mb-4'>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Porro, totam. Lorem ipsum, dolor sit amet consectetur
                  adipisicing elit.
                </p>
                <button className='bg-red-800 text-white px-4 py-2 rounded hover:bg-red-900'>
                  Ver Más
                </button>
              </div>
            </div>
          </div>
          <div className='mt-8'>
            <Countdown targetDate={"2024-11-30"} />
          </div>
        </section>

        <section id='prices' className='py-40'>
          <div className='max-w-5xl mx-auto text-center'>
            <h2 className='text-3xl font-bold mb-6'>Planes y Precios</h2>
            <div className='grid md:grid-cols-3 gap-6'>
              <div className='bg-white p-6 shadow-md rounded-lg border border-gray-200'>
                <h3 className='text-xl font-semibold mb-4'>Básico</h3>
                <p className='text-2xl font-bold mb-4'>$10/mes</p>
                <ul className='text-gray-600 mb-4'>
                  <li className='mb-2'> - 1 usuario</li>
                  <li className='mb-2'> - 10GB almacenamiento</li>
                  <li className='mb-2'> - Soporte básico</li>
                </ul>
                <button className='bg-red-800 text-white px-4 py-2 rounded'>
                  Elegir Plan
                </button>
              </div>

              <div className='bg-white p-6 shadow-md rounded-lg border border-gray-200'>
                <h3 className='text-xl font-semibold mb-4'>Pro</h3>
                <p className='text-2xl font-bold mb-4'>$20/mes</p>
                <ul className='text-gray-600 mb-4'>
                  <li className='mb-2'> - 5 usuarios</li>
                  <li className='mb-2'> - 50GB almacenamiento</li>
                  <li className='mb-2'> - Soporte prioritario</li>
                </ul>
                <button className='bg-red-800 text-white px-4 py-2 rounded'>
                  Elegir Plan
                </button>
              </div>

              <div className='bg-white p-6 shadow-md rounded-lg border border-gray-200'>
                <h3 className='text-xl font-semibold mb-4'>Premium</h3>
                <p className='text-2xl font-bold mb-4'>$50/mes</p>
                <ul className='text-gray-600 mb-4'>
                  <li className='mb-2'> - Usuarios ilimitados</li>
                  <li className='mb-2'> - 200GB almacenamiento</li>
                  <li className='mb-2'> - Soporte 24/7</li>
                </ul>
                <button className='bg-red-800 text-white px-4 py-2 rounded '>
                  Elegir Plan
                </button>
              </div>
            </div>
          </div>
        </section>

        <section id='register' className='py-40'>
          <RegisterForm />
        </section>

        <section id='register' className='py-40'>
          <FileUpload />
        </section>
      </main>
    </>
  );
}

export default App;
