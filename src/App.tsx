import { useEffect, useState } from 'react';
import './App.css'
import 'animate.css';
import Tittle from './assets/tittle.png'
import Esfera from './assets/esfera.png'
import Logos from './assets/logos.png'
import useApis from './useApis';

function App() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const { cattegory, data, handleChange, handleChangePrize, handleSort, winners, setCompletePrize, completePrize, } = useApis()

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


  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    
    //const maxRepeats = 3; // Número de repeticiones
    const interval = setInterval(() => {
      setIsAnimating(true);

      setTimeout(() => {
        setIsAnimating(false);
      }, 2000); // Duración de cada animación

  
    }, 3000); // Intervalo entre repeticiones

    return () => clearInterval(interval);
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
            <div 
            
            className={`title_container  animate__animated ${isAnimating ? 'animate__swing' : ''}`}
             style={{ '--animate-duration': '2s' } as React.CSSProperties}
            >
              <img src={Tittle} alt="imagen titulo" />
            </div>
         
           <div className='select_container'>
            <select value={cattegory} onChange={handleChange}>
              <option defaultChecked value="0">Categoria:</option>
              <option value="MOVILIDAD">MOVILIDAD</option>
              <option value="MOVILIDAD_VIP">MOVILIDAD VIP</option>
              <option value="HOGAR">HOGAR</option>
              <option value="HOGAR_VIP">HOGAR VIP</option>
              <option value="CONECTIVIDAD">CONECTIVIDAD</option>
              <option value="CONECTIVIDAD_VIP">CONETIVIDAD VIP</option>
            </select>
          </div>

          <div className='select_container2'>
            <select onChange={handleChangePrize}>
              <option selected value="0">Premio:</option>
              {data?.prizes.map(prize => <option onClick={()=>setCompletePrize(prize)} value={prize.id}>{prize.title}</option>)}
            </select>
          </div>


            <div className='btn_sortear_container'>
              <button className="button-42" onClick={handleSort} role="button">Sortear</button>
            </div>
            <div 
             className={`esfera_container  animate__animated ${isAnimating ? 'animate__bounce' : ''}`}
             style={{ '--animate-duration': '2s' } as React.CSSProperties}
            
            >
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
            <h2 className='ganadores_title'>Ganadores:</h2>
            <div className='ganadores_container'>
            
              {
                winners?.map(winner => <p>{winner.name}</p>)
              }
            </div>
          </div>
        </div>
      )}
      <div className='footer'> </div>
    </>
  );
}

export default App;
