import React from 'react'
import { Card, Button } from 'react-bootstrap';
import s from './Home.module.css';
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";
import Fade from "react-reveal/Fade";

const Home = () => {
  return (
    <div className={s.HomeContainer}>
      <div className={s.HomeHeader}>
        <div className={s.headerDividido}>
          <div>
            {/* <p className={s.parra}>Anana<br/>Tech Solutions</p> */}
          </div>
          <Fade right>
            <div className={s.dejaLaTec}>
              <h1 className={s.title}>
                Dejá la tecnologia para nosotros
              </h1>
            </div>
          </Fade>
        </div>
      </div>
      <div className={s.HomeHeader2}>
        <div className={s.titleContainer}>
          <div className={s.titleContainer2}>
            <h2 className={s.title2}>
              <Typewriter
                options={{
                  strings: [
                    "Lo que ofrecemos",
                    "Desarrollo de software",
                    "UI/UX Design",
                    "Digital Marketing",
                    "Customer Service",
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 7,
                }}
              />
            </h2>
           {/* <h2 className={s.title2}>Lo que ofrecemos</h2> */}
          </div>
        </div>
        <div className={s.cajaDividida2}>
          {/*<div className={s.caja}>
            <img src="https://concepto.de/wp-content/uploads/2014/08/programacion-2-e1551291144973.jpg" alt="" />
            <h2 className={s.title3}>Desarrollo de Software</h2>
            <p className={s.parra2}>Creamos tu pagina web a tu medida, diseñamos las mejores interfases de usuario para ayudarte a crecer</p>
          </div> */}
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://concepto.de/wp-content/uploads/2014/08/programacion-2-e1551291144973.jpg" />
            <Card.Body>
              <Card.Title>Desarrollo de Software</Card.Title>
              <Card.Text>
                Creamos tu pagina web a tu medida, diseñamos las mejores interfases de usuario para ayudarte a crecer
              </Card.Text>
              <Link to='/about'>
                <Button variant="primary">Ver más</Button>
              </Link>
            </Card.Body>
          </Card>
          {/* <div className={s.caja}>
            <img src="https://cdnupc-assets.s3.amazonaws.com/wp-content/uploads/2022/03/17163958/joven-programando-ingenieria-de-software-upc-1-1024x536.jpg" alt="" />
            <h2 className={s.title3}>Mantenimiento</h2>
            <p className={s.parra2}>Hacemos que tu pagina funcione en todo momento.Corregimos Bugs,Te ayudamos a corregir errores de codigo y más.</p>
          </div> */}
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://cdnupc-assets.s3.amazonaws.com/wp-content/uploads/2022/03/17163958/joven-programando-ingenieria-de-software-upc-1-1024x536.jpg" />
            <Card.Body>
              <Card.Title>Mantenimiento</Card.Title>
              <Card.Text>
                Hacemos que tu pagina funcione en todo momento.Corregimos Bugs,Te ayudamos a corregir errores de codigo y más.
              </Card.Text>
              <Link to='/about'>
                <Button variant="primary">Ver más</Button>
              </Link>
            </Card.Body>
          </Card>
          {/* <div className={s.caja}>
            <img src="https://files.lafm.com.co/assets/public/2022-02/trading.jpg?1acQ40ouZjwltxIQzQQNfZbLJpr.7Xov" alt="" />
            <h2 className={s.title3}>Modernización</h2>
            <p className={s.parra2}>Pasamos tu sitio de la teccnología vieja a React, con mejores diseños, o si quieres mantener los actuales, no hay problema, lo hacemos por vos!</p>
          </div> */}
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://concepto.de/wp-content/uploads/2018/02/sistemas-de-informacion.jpg" />
            <Card.Body>
              <Card.Title >Modernización</Card.Title>
              <Card.Text>
                Pasamos tu sitio web de la teccnología vieja a React, con mejores diseños, nosotros lo hacemos por vos!.
              </Card.Text>
              <Link to='/about'>
                <Button variant="primary">Ver más</Button>
              </Link>
            </Card.Body>
          </Card>
        </div>
        
      </div>
    </div>
  )
}

export default Home