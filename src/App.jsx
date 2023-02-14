import { useState, useEffect } from 'react'
import Header from './Header'
import Hero from './Hero'
import Portfolio from './assets/portfolio.json'
import Carousel from './Carousel';
import Techs from './Techs';
import Contact from './Contact';

function App() {
  let num = 0;
  Portfolio.map(x => {x.id = num; num++;})

  let localTheme = 'light';
  if (localStorage.getItem('theme') == 'dark'){
    localTheme = 'dark';
  }

  const [theme, setTheme] = useState(localTheme);

  function toggleTheme() {
    let newTheme = theme == 'light' ? 'dark' : 'light'
    localStorage.setItem('theme', newTheme)
    setTheme(newTheme)
  }

  let accent = theme == 'light' ? '#4A63D3': '#32E0C4';
  let mask = theme == 'light' ? '#fff' : '#212121';

  return (
    <div className={"App " + theme}>
      <Header toggleTheme={toggleTheme} theme={theme}/>
      <Hero accent={accent} mask={mask}/>
      <section id="about-me" class="main-section">
        <h1 style={{color: accent}}>Sobre mí</h1>
        <p>Soy un estudiante de Ingeniería Informática en la <b>Universidad Carlos III de Madrid</b>.
        Apasionado por la programación, la informática y la tecnología, siempre estoy dispuesto
        a aprender nuevos métodos y herramientas de desarrollo.
        <br></br>
        La tecnología Blockchain es uno de los temas que más ha atraído mi atención durante la última década.</p>
      </section>
      <section id="portfolio" class="main-section">
        <h1 style={{color: accent}}>Portfolio y tecnologías</h1>
        <Techs accent={accent}/>
        <p>Estos son algunos de los proyectos personales y académicos que he desarrollado:</p>
        <Carousel data={Portfolio} accent={accent}/>
      </section>
      <section id="contact" class="main-section">
        <h1 style={{color: accent}}>Contacta conmigo</h1>
        <Contact accent={accent}/>
      </section>
    </div>
  )
}

export default App
