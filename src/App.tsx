import { useEffect, useState } from 'react';
import './App.css'
import Tittle from './assets/tittle.png'
import Esfera from './assets/esfera.png'
import Logos from './assets/logos.png'

function App() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 1200);
    };
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  return (
    <>
      {isSmallScreen ? (
        <div className="overlay">
          <div className="overlay-content">
            <h1>¡Lo sentimos!</h1>
            <p>
              Esta página está optimizada para pantallas con un ancho de al menos
              1200px. Por favor, ajusta el tamaño de tu ventana o accede desde un
              dispositivo con mayor resolución.
            </p>
          </div>
        </div>
      ) : (
        <div className='container_father'>
          <div className='col1'>
            <div className='title_container'>
              <img src={Tittle} alt="imagen titulo" />
            </div>
         
           <div className='select_container'>
            <select>
              <option selected value="0">Categoria:</option>
              <option value="1">No Wrapper</option>
              <option value="2">No JS</option>
              <option value="3">Nice!</option>
            </select>
          </div>

          <div className='select_container2'>
            <select>
              <option selected value="0">Premio:</option>
              <option value="1">No Wrapper</option>
              <option value="2">No JS</option>
              <option value="3">Nice!</option>
            </select>
          </div>


            <div className='btn_sortear_container'>
              <button className="button-42" role="button">Sortear</button>
            </div>
            <div className='esfera_container'>
              <img src={Esfera} alt="imagen esfera" />
            </div>
          </div>

          <div className='col2'>
            <div className='logos_container'>
              <img src={Logos} alt="" />
            </div>

            <div className='tittle_premio'>
              <p>Cargando...</p>
            </div>

            <div className='ganadores_container'>
              <p>Isra</p>
              <p>Gera</p>
              <p>Isra</p>
              <p>Gera</p>
              <p>Isra</p>
              <p>Gera</p>
              <p>Isra</p>
              <p>Gera</p>
              <p>Isra</p>
              <p>Gera</p>
              <p>Isra</p>
              <p>Gera</p>
            </div>
          </div>
        </div>
      )}
      <div className='footer'> </div>
    </>
  );
}

export default App;
