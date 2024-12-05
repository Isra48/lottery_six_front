
import './App.css'
import Tittle from './assets/tittle.png'
import Esfera from './assets/esfera.png'
import Logos from './assets/logos.png'

function App() {


  return (
    <>

      <div className='container_father'>


        <div className='col1'>
          <div className='title_container'>
            <img src={Tittle} alt="imagen titulo" />
          </div>
          <div className="dropdown">
            <button className="dropbtn">Categoria</button>
            <div className="dropdown-content">
              <a href="#">Hogar</a>
              <a href="#">Hogar VIP</a>
              <a href="#">Conectividad</a>
              <a href="#">Conectividad VIP</a>
              <a href="#">Movilidad</a>
              <a href="#">Movilidad VIP</a>
            </div>
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

      <div className='footer'> </div>

    </>
  )
}

export default App
