import React from 'react'
import s from './NavBar.module.css';

function NavBar() {
  return (
    <div className={s.navContainer}>
      <ul>
        <li><a href="">Inicio</a></li>
        <li><a href="">Sobre Nosotros</a></li>
        <li><a href="">Descuentos</a></li>
        <li><a href="">Bots de Trading</a></li>
      </ul>
    </div>
  )
}

export default NavBar