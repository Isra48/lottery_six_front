import { useEffect, useState } from 'react';
import './App.css';
import 'animate.css';
import Player from 'lottie-react';
import loadingAnimation from './assets/Animation.json';

import Tittle from './assets/tittle.png';
import Esfera from './assets/esfera.png';
import Logos from './assets/logos.png';

function App() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<string[]>([]);

  const animationDuration = 5000; // Duración de la animación principal en milisegundos

  // Detecta el tamaño de la pantalla
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

  // Controla las animaciones cíclicas
  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setIsAnimating(false);
      }, 2000); // Duración de cada animación cíclica
    }, 3000); // Intervalo entre repeticiones

    return () => clearInterval(interval);
  }, []);

  // Controla el estado de carga
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      // Espera el tiempo de duración de la animación principal
      await new Promise((resolve) => setTimeout(resolve, animationDuration));

      // Simula datos cargados
      setData(['Isra', 'Gera', 'Isra', 'Gera', 'Isra', 'Gera']);
      setIsLoading(false);
    };

    fetchData();
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
        <div className="container_father">
          <div className="col1">
            {/* Animación de título */}
            <div
              className={`title_container animate__animated ${
                isAnimating ? 'animate__swing' : ''
              }`}
              style={{ '--animate-duration': '2s' } as React.CSSProperties}
            >
              <img src={Tittle} alt="imagen titulo" />
            </div>

            {/* Dropdowns */}
            <div className="select_container">
              <select defaultValue="0">
                <option value="0">Categoria:</option>
                <option value="1">No Wrapper</option>
                <option value="2">No JS</option>
                <option value="3">Nice!</option>
              </select>
            </div>

            <div className="select_container2">
              <select defaultValue="0">
                <option value="0">Premio:</option>
                <option value="1">No Wrapper</option>
                <option value="2">No JS</option>
                <option value="3">Nice!</option>
              </select>
            </div>

            {/* Botón */}
            <div className="btn_sortear_container">
              <button className="button-42" role="button">
                Sortear
              </button>
            </div>

            {/* Animación de la esfera */}
            <div
              className={`esfera_container animate__animated ${
                isAnimating ? 'animate__bounce' : ''
              }`}
              style={{ '--animate-duration': '2s' } as React.CSSProperties}
            >
              <img src={Esfera} alt="imagen esfera" />
            </div>
          </div>

          <div className="col2">
            {/* Logos */}
            <div className="logos_container">
              <img src={Logos} alt="Logos" />
            </div>

            {/* Título de ganadores */}
            <div className="tittle_premio">
              <p>Cargando...</p>
            </div>

            {/* Animación de carga o datos */}
            <h2 className="ganadores_title">Ganadores:</h2>
            <div className="ganadores_container">
              {isLoading ? (
                <Player
                  autoplay
                  loop
                  animationData={loadingAnimation}
                  style={{ height: '400px', width: '600px' }}
                />
              ) : (
                data.map((item, index) => <p key={index}>{item}</p>)
              )}
            </div>
          </div>
        </div>
      )}
      <div className="footer"> </div>
    </>
  );
}

export default App;
