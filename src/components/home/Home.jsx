import React from 'react'
import s from './Home.module.css';

const Home = () => {
  return (
    <div className={s.HomeContainer}>
      <div className={s.HomeHeader}>
        <div className={s.headerDividido}>
          <div>
            <p className={s.parra}>Anana<br/>Tech Solutions</p>
          </div>
          <div>
            <h1 className={s.title}>
              Deja la tecnologia para nosotros
            </h1>
          </div>
        </div>
      </div>
      <div className={s.HomeHeader2}>
        <div className={s.titleContainer}>
          <div className={s.titleContainer2}>
           <h2 className={s.title2}>Lo que ofrecemos</h2>
          </div>
        </div>
        <div className={s.cajaDividida2}>
          <div className={s.caja}>
            <img src="https://concepto.de/wp-content/uploads/2014/08/programacion-2-e1551291144973.jpg" alt="" />
            <h2 className={s.title3}>Desarrollo de Software</h2>
            <p className={s.parra2}>Creamos tu pagina web a tu medida, diseñamos las mejores interfases de usuario para ayudarte a crecer</p>
          </div>
          <div className={s.caja}>
          <img src="https://cdnupc-assets.s3.amazonaws.com/wp-content/uploads/2022/03/17163958/joven-programando-ingenieria-de-software-upc-1-1024x536.jpg" alt="" />
            <h2 className={s.title3}>Mantenimiento</h2>
            <p className={s.parra2}>Hacemos que tu pagina funcione en todo momento.Corregimos Bugs,Te ayudamos a corregir errores de codigo y más.</p>
          </div>
          <div className={s.caja}>
          <img src="https://files.lafm.com.co/assets/public/2022-02/trading.jpg?1acQ40ouZjwltxIQzQQNfZbLJpr.7Xov" alt="" />
            <h2 className={s.title3}>Modernización</h2>
            <p className={s.parra2}>Pasamos tu sitio de la teccnología vieja a React, con mejores diseños, o si quieres mantener los actuales, no hay problema, lo hacemos por vos!</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home