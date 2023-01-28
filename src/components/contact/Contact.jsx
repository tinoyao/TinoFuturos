import s from './Contact.module.css';

const Contact = () => {
    return(
        <div className={s.ContainerCont}>
            <div className={s.Container1}>
                <h2>Cómo puedo saber cuanto trafico tiene mi pagina web hecha en react?</h2>
                <p>
                    Hay varias formas de medir el tráfico de una página web hecha en React.
                </p>
                <ul>
                    <li>
                        Una forma es utilizar herramientas de análisis web gratuitas como Google Analytics, 
                        que es una de las más populares. Simplemente agregue el código de seguimiento de 
                        Google Analytics a su sitio web y podrá ver estadísticas sobre el tráfico, las 
                        páginas más populares, la fuente de tráfico, etc.
                    </li>
                    <li>
                        Otra forma de medir el tráfico de su sitio web de forma gratuita es mediante herramientas
                        como <strong>Matomo </strong>(anteriormente conocido como Piwik) o <strong>Open Web Analytics</strong>,
                        son alternativas a Google Analytics y ofrecen un gran conjunto de características y estadísticas similares
                    </li>
                    <li>
                        También puede usar herramientas de seguimiento de tráfico web gratuitas como <strong>Clicky</strong> o <strong>W3Counter</strong>,
                        que proporcionan estadísticas básicas sobre el tráfico, como la cantidad de visitas y la duración
                        de las visitas.
                    </li>
                </ul>
            </div>
            <div className={s.container2}>
                <h2>Cómo usar Clicky para ver el trafico de vistas</h2>
                <p>
                    Para utilizar Clicky para ver el tráfico de vistas en su sitio web hecho en React,
                    siga los siguientes pasos:
                </p>
                <ol>
                    <li>
                        Crea una cuenta gratuita en Clicky (si aun no tienes una) en https://clicky.com/signup
                    </li>
                    <li>
                        Agrega tu sitio web en el panel de control de Clicky.
                    </li>
                    <li>
                        Copia el código de seguimiento que Clicky te proporciona y agrégalo en tu sitio web en la
                        sección *head* de tu archivo HTML.
                    </li>
                    <li>
                        Una vez que el código esté instalado, Clicky comenzará a recopilar datos de tráfico en tu sitio web.
                    </li>
                </ol>
                <p>
                    Una vez que los datos estén disponibles, podrás ver estadísticas en tu panel de control de Clicky,
                    como el número de visitas, la duración de las visitas, el número de páginas vistas, el tráfico de
                    referencia, etc. También puedes ver gráficos y tablas para ver cómo cambia el tráfico en tu sitio
                    web a lo largo del tiempo.
                </p><br/>
                <p>
                    Clicky también ofrece una interfaz en tiempo real, donde puedes ver quién está visitando tu sitio
                    web en ese momento y desde donde. También te permite ver estadísticas detalladas de cada visita
                    individual, como qué páginas vieron, durante cuánto tiempo estuvieron en tu sitio, y desde dónde
                    vinieron.
                </p>

            </div>
            <div>
                <form action="">
                    <label htmlFor="">hola aquí deja tu like</label>
                    <input type="text" />
                    <label htmlFor="">deecime si te gustó</label>
                    <input type="text" />
                    <label htmlFor="">password</label>
                    <input type="password" />
                    <button type="submit"></button>
                </form>
            </div>
        </div>
    )
}
export default Contact