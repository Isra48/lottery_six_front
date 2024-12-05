import { useEffect, useState } from 'react';
import './App.css';
import 'animate.css';


import Tittle from './assets/tittle.png';
import Esfera from './assets/esfera.png';
import Logos from './assets/logos.png';
import useApis from './useApis';

function App() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0); // Nuevo estado para el progreso
  const [data, setData] = useState<string[]>([]);

  const animationDuration = 5000; // Duración simulada de la carga en milisegundos (5 segundos)
  const { cattegory, handleChange } = useApis()

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

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setIsAnimating(false);
      }, 2000); // Duración de cada animación cíclica
    }, 3000); // Intervalo entre repeticiones

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      // Inicia el progreso
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            return 100;
          }
          return prev + 1; // Incrementa el progreso cada 50ms
        });
      }, animationDuration / 100);

      // Simula la carga de datos de la API
      await new Promise((resolve) => setTimeout(resolve, animationDuration));

      setData(['Isra', 'Gera', 'Isra', 'Gera', 'Isra', 'Gera']); // Simula datos cargados
      setIsLoading(false);
      setProgress(100); // Asegura que el progreso llegue al 100%
    };

    fetchData();
  }, [animationDuration]);

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
            <div
              className={`title_container animate__animated ${
                isAnimating ? 'animate__swing' : ''
              }`}
              style={{ '--animate-duration': '2s' } as React.CSSProperties}
            >
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

            <div className="btn_sortear_container">
              <button className="button-42" role="button">
                Sortear
              </button>
            </div>

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
            <div className="logos_container">
              <img src={Logos} alt="Logos" />
            </div>

            <div className="tittle_premio">
              <p style={{textAlign: 'center', marginBottom: '-.5em'}}>{isLoading ? 'Cargando...' : '¡Tenemos Ganadores!'}</p>
              <div className="progress-bar">
                <div
                  className="progress-bar-inner"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </div>

            <h2 className="ganadores_title">Ganadores:</h2>
            <div className="ganadores_container">
              {isLoading ? (
              <></>
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
