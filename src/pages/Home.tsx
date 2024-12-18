

import { useEffect, useState } from 'react';
import '../App.css';


import 'animate.css';


import Tittle from './../assets/tittle.png';
import Esfera from './../assets/esfera.png';
import Logos from './../assets/logos.png';
import useApis from '../useApis';

function Home () {
    const [isSmallScreen, setIsSmallScreen] = useState(false);
    const { cattegory, data: categories, handleChange, handleChangePrize, handleSort, winners, completePrize, isSuccess, progress} = useApis()
    const [isAnimating, setIsAnimating] = useState(false);
  
  
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
            <select value={cattegory} onChange={handleChange}>
            <option defaultChecked value="0">Categoría:</option>
            <option value="HOGAR">HOGAR</option>
            <option value="CONECTIVIDAD">CONECTIVIDAD</option>
            <option value="MOVILIDAD">MOVILIDAD</option>
            <option value="CONECTIVIDAD_VIP">TELEFONÍA</option>
            <option value="HOGAR_VIP">PANTALLAS</option>
            <option value="MOVILIDAD_VIP">MOTOCICLETAS</option>
              
           
           
            
            
           
            </select>
          </div>

          <div className='select_container2'>
            <select onChange={handleChangePrize}>
              <option selected value="0">Premio:</option>
              {categories?.prizes.sort((a,b) => ((+a.order) - (+b.order))).map(prize => <option value={prize.id}>{prize.title}</option>)}
            </select>
          </div>


            <div className='btn_sortear_container'>
              <button disabled={completePrize?.stock === '0'} style={{background: completePrize?.stock === '0' ? 'gray' : ''}} className="button-42" onClick={handleSort} role="button">Sortear</button>
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
              <p style={{textAlign: 'center', marginBottom: '-.5em'}}>{isSuccess  ? '¡Tenemos Ganadores!' : 'Buscando ganadores...'}</p>
              <div className="progress-bar">
                <div
                  className="progress-bar-inner"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </div>
            <h2 className='ganadores_title'>Ganadores:</h2>
            <div className='ganadores_container'>
              {completePrize?.stock === '0' && <p style={{color: '#ff0800'}}>Producto no disponible</p>}
              {
                winners?.map(winner => <p style={{fontSize: '20px', fontWeight: 'bold'}}>{winner.name}</p>)
              }
            </div>
          </div>
        </div>
      )}
      <div className="footer"> </div>
    
    
    
    
    
    
    </>
  )
}

export default Home