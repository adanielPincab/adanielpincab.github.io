import './Techs.css'

import { DiJsBadge, DiHtml5, DiCss3, DiJava, DiPython, DiNodejsSmall, DiReact, DiSass } from "react-icons/di";
import { SiCplusplus } from "react-icons/si";

function Techs({accent}) {
    return <div class="technologies">
        <div class="frontend">
            <h1 style={{color: accent}}>Frontend</h1>
            <div>
                <DiHtml5 className='devicon'/>
                <DiCss3 className='devicon'/>
                <DiJsBadge className='devicon'/>
                <DiReact className='devicon'/>
                <DiSass className='devicon'/>
            </div>
            <p>Partiendo de una fundación en frontend vanilla (HTML+CSS+JS) estático practico en proyectos personales con frameworks y preprocesadores de estilo más modernos.</p>
        </div>
        <div class="backend">
            <h1 style={{color: accent}}>Backend</h1>
            <div>
                <DiPython className='devicon'/>
                <DiJava className='devicon'/>
                <SiCplusplus className='devicon'/>
                <DiNodejsSmall className='devicon'/>
            </div>
            <p>Python es el lenguaje con el que más me desenvuelvo. No obstante, en mi carrera también trabajo con otros grandes estandarizados en la industria como Java y de más bajo nivel como C/C++.</p>
        </div>
        </div>;
}

export default Techs;